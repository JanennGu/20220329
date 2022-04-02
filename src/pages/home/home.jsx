/*
 * @Author: your name
 * @Date: 2022-03-29 23:53:32
 * @LastEditTime: 2022-04-02 14:57:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \doc\src\pages\home\home.jsx
 */
import React, { Component } from "react";
import { Layout } from 'antd';
import { Button } from "antd";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";
import { reqText } from "../../api/index.js";

//登录页的路由组件

const {Footer, Sider, Content } = Layout;
const ip = '192.168.1.200'
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }
        BT = async(ip) =>{
            console.log("发送请求",ip)
            const result = await reqText(ip)
            console.log("结果",result)
        }

    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Header>HEADER</Header>
                <Layout>
                    <Sider><LeftNav/></Sider>
                    <Content style={{backgroundColor:'white'}}>
                    <Button type='primary' className="buttest"  onClick={()=>this.BT(ip)}>测试交互按钮1</Button>
                    <Button type='primary' className="buttest">测试交互按钮2</Button>
                    </Content>
                </Layout>
                <Footer style={{backgroundColor:'#3E3992',textAlign:'center',color:'aaaaa'}}>Footaaaaaaaaaaaaaaaaaaaaaaaaer</Footer>
            </Layout>
        );
    }
}