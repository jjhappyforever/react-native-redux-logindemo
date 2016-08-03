import React, { Component } from 'react';
import {Provider} from 'react-redux';
import App from './containers/app';

import configureStore from './store/configureStore';
const store=configureStore();//获取store

export default class Root extends Component{
   render(){
     return(
       <Provider store={store}>
       <App/>
       </Provider>
     );
   }

}
