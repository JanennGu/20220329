/*
 * @Author: your name
 * @Date: 2022-03-30 00:44:32
 * @LastEditTime: 2022-04-13 15:08:48
 * @LastEditors: Regina
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \doc\src\components\left-nav\index.jsx
 */
import React,{Component} from "react";
import './index.less'
import { Menu } from 'antd';
import logo from '../../assets/images/logo.png'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu; 
//左侧导航组件

export default function LeftNav(){

  return (
    <Menu
      onClick={(e)=>{console.log('click ', e);}}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >

      <Menu.Item key="sub1" icon={<MailOutlined />}>新建工程</Menu.Item>
      <Menu.Item key="sub2" icon={<MailOutlined />}>加载工程</Menu.Item>
      <Menu.Item key="sub3" icon={<MailOutlined />}>当前进度</Menu.Item>

      <SubMenu key="sub4" icon={<AppstoreOutlined />} title="调试">
        <Menu.Item key="1">升降柱</Menu.Item>
        <Menu.Item key="2">机器人</Menu.Item>
      </ SubMenu>

      <Menu.Item key="sub5" icon={<MailOutlined />}>日志查看</Menu.Item>
    </Menu>

);
}


// export default class LeftNav extends Component{
//   handleClick = e => {
//     console.log('click ', e);
//   };

//   render() {
//     return (
    
//         <Menu
//           onClick={this.handleClick}
//           style={{ width: 256 }}
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           mode="inline"
//         >

//           <Menu.Item key="sub1" icon={<MailOutlined />}>新建工程</Menu.Item>
//           <Menu.Item key="sub2" icon={<MailOutlined />}>加载工程</Menu.Item>
//           <Menu.Item key="sub3" icon={<MailOutlined />}>当前进度</Menu.Item>

//           <SubMenu key="sub4" icon={<AppstoreOutlined />} title="调试">
//             <Menu.Item key="1">升降柱</Menu.Item>
//             <Menu.Item key="2">机器人</Menu.Item>
//           </ SubMenu>

//           <Menu.Item key="sub5" icon={<MailOutlined />}>日志查看</Menu.Item>
//         </Menu>

//     );
//   }
// }
