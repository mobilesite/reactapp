import "babel-polyfill";
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Route } from 'react-router'
import { Link, BrowserRouter, HashRouter } from 'react-router-dom'
import store from "./store"

// import Layout from "./components/Layout"
import {Layout} from "./containers/Layout"


import './styles/index.less'

import NotSupportPage from "./components/NotSupportPage"

import platform from 'platform'
import {blackList} from './blacklist'

// require('../assets/scss/src.scss');

const app = document.getElementById('app')

//check browser compatible
var clientPlatform = {
  name : platform.name,
  version : platform.version,
  os : platform.os.family
}

console.log("client: ", clientPlatform)

var illegal = false
for (var i = 0; i< blackList.length; i++){  
  if (clientPlatform.name !== blackList[i].name) {
    continue
  }
  if (clientPlatform.version.substring(0, blackList[i].version.length) !== blackList[i].version){
    continue
  }
  if (clientPlatform.os.indexOf(blackList[i].os) === -1) {
    continue
  }
  illegal = true
  break
}

if (illegal){
  render(  
  <NotSupportPage client={clientPlatform}/>
  , app);		  
}else{
  render(
  <Provider store={store}>
   <Layout />
  </Provider>, app);		
}

