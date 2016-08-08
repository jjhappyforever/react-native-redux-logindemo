import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/loginActions';

/**
登陆页面
**/
class Home extends Component{

  constructor(props){
    super(props);

    this.logout=this.logout.bind(this);
  }

  logout(){
    const {dispatch,user,navigator}=this.props;
    console.log(this.props);

    //调用logout方法
    dispatch(actionCreators.logout());

    navigator.pop();
  }

   render(){
     return(
      <View style={{padding:30,marginTop:30}}>
      <Text style={{fontSize:18}}>手机号:{this.props.user.phone} 登陆成功！！！</Text>
      <TouchableHighlight style={styles.button}
       underlayColor='#000000' onPress={this.logout}>
      <Text style={{fontSize:16,color:'#fff'}}>注销</Text>
      </TouchableHighlight>
      </View>
     );
   }
}

const styles =StyleSheet.create({
    item:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      height:50,
      borderBottomColor:'#ddd',
      borderBottomWidth:1,
    },
    input:{
      flex:1,
      fontSize:14,
    },
    button:{
      backgroundColor:'#1a191f',
      height:50,
      flex:1,
      marginTop:40,
      justifyContent:'center',
      alignItems:'center'
    }
});

//根据全局state返回当前页面所需要的信息
function mapStateToProps(state){
  return{
    isLoggedIn:state.user.isLoggedIn,
    user:state.user.user,
    status:state.user.status,
  };
}
//链接起来
export default connect(mapStateToProps)(Home);
