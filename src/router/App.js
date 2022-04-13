/*
 * @Author: Regina
 * @Date: 2022-03-29 15:41:13
 * @LastEditors: Regina
 * @Description: 
 * 
 * Copyright (c) 2022 by Regina/Elite, All Rights Reserved. 
 */
import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import New  from "../pages/new/new";
import Load from "../pages/load/load";
import Progress from "../pages/progress/progress";
import Robot from "../pages/robot/robot";
import Bollard from "../pages/bollard/bollard";
//应用的跟组件
// export default class App extends Component {

//   render(){
//     return(
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<New />}/>
//         <Route path='/load' element={<Load />} />
//         <Route path='/progress' element={<Progress />} />
//         <Route path='/load' element={<Load />} />
//         <Route path='/bollard' element={<Bollard />} />
//         <Route path='/robot' element={<Robot />} />
//       </Routes>
//    </BrowserRouter>
//     );
//   }
// }
const App = () =>(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<New />}/>
      <Route path='/load' element={<Load />} />
      <Route path='/progress' element={<Progress />} />
      <Route path='/load' element={<Load />} />
      <Route path='/bollard' element={<Bollard />} />
      <Route path='/robot' element={<Robot />} />
   </Routes>
  </BrowserRouter>
)

export default App;