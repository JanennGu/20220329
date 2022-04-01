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
                    <Content style={{backgroundColor:'gray'}}>
                    <Button type='primary'>测试交互按钮</Button>
                    </Content>
                </Layout>
                <Footer style={{backgroundColor:'#3E3992',textAlign:'center',color:'aaaaa'}}>Footaaaaaaaaaaaaaaaaaaaaaaaaer</Footer>
            </Layout>
        );
    }
}