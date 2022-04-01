/*
 * @Author: your name
 * @Date: 2022-03-29 23:53:32
 * @LastEditTime: 2022-04-01 18:25:02
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \doc\src\pages\home\home.jsx
 */
import React, { Component } from "react";
import { Layout } from 'antd';
import { Button } from "antd";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";
//登录页的路由组件

const {Footer, Sider, Content } = Layout;

export default class Home extends Component {
    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Header>HEADER</Header>
                <Layout>
                    <Sider><LeftNav/></Sider>
                    <Content style={{backgroundColor:'white'}}>
                    <Button type='primary'>测试交互按钮</Button>
                    </Content>
                </Layout>
                <Footer style={{backgroundColor:'#3E3992',textAlign:'center',color:'aaaaa'}}>Footaaaaaaaaaaaaaaaaaaaaaaaaer</Footer>
            </Layout>
        );
    }
}