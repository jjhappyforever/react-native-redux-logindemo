 import * as types from './types';
 import {Alert}from 'react-native';

let testUser={
  'phone':'15221850400',
  'password':'123456',
}

//登陆
export function login(user){

   return dispatch=>{
     //登陆中,派遣给LOGIN_ING
     dispatch({type:types.LOGIN_ING});
     let result=fetch('http://www.baidu.com')
                .then((res)=>{
                  //延时2s为了模拟效果
                  setTimeout(()=>{
                    if(user.phone==testUser.phone&&user.password==testUser.password){
                      dispatch({type:types.LOGIN,user:user});
                    }else{
                      //这里分发的是action
                      Alert.alert('用户名或密码错误');
                      dispatch({type:types.LOGIN_ERROR});
                    }

                  },1000);


                }).catch((err)=>{
                   alert(err);
                   dispatch({type:types.LOGIN_ERROR,error:err});
                })
   }
}

//登出
export function logout(){
  return {
    type:types.LOGOUT,
  };
}
