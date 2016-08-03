
 import * as types from '../actions/types';

const initialState={
  isLoggedIn:false,//登陆状态
  user:{},
  status: null,
};

//reducer处理函数
export default function user(state=initialState,action={}){

  // console.log(state);

  switch(action.type) {
    case types.LOGIN:
       return{
         ...state,
         isLoggedIn:true,
         user:action.user,
         status: 'done',
       }
      break;
    case types.LOGIN_ING:
      return {
        ...state,
        isLoggedIn:false,
        status: 'doing',
      }
      break;
    case types.LOGIN_ERROR:
    console.log(action);
        return{
          ...state,
        	isLoggedIn: false,
          status: null,
        };
        break;
    case types.LOGOUT:

      break;
    //切莫忘记default返回值
    default:
      return state;
  }

}
