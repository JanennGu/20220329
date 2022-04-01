import React, { Component } from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login  from "./pages/login/login";
import Home  from "./pages/home/home";
//应用的跟组件
export default class App extends Component {

  render(){
    return(
      <BrowserRouter>
         <Routes>
           <Route path='/login' element={<Login />}/>
           <Route path='/' element={<Home />} />
         </Routes>
      </BrowserRouter>
    );
  }
}