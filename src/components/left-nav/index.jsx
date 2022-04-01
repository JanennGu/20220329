import React,{Component} from "react";
import './index.less'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu; 
//左侧导航组件

export default class LeftNav extends Component{
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
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

        <Menu.Item key="sub4" icon={<MailOutlined />}>日志查看</Menu.Item>
      </Menu>
    );
  }
}
