/*
 * @Author: Regina
 * @Date: 2022-04-13 10:41:00
 * @LastEditors: Regina
 * @Description: 
 * 
 * Copyright (c) 2022 by Regina/Elite, All Rights Reserved. 
 */
import React, { Component } from "react";
import { Layout } from 'antd';
import { Button } from "antd";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";
import { reqText } from "../../api/index.js";

//新建工程路由

const {Footer, Sider, Content } = Layout;
const ip = '192.168.1.200'

export default function New(){

    const BT = async(ip) =>{
        console.log("发送请求",ip)
        const result = await reqText(ip)
        console.log("结果",result)
    }

    return(
        <Layout style={{height:'100%'}}>
        <Header>HEADER</Header>
        <Layout>
            <Sider><LeftNav/></Sider>
            <Content style={{backgroundColor:'white'}}>
            <Button type='primary' className="buttest"  onClick={()=>BT(ip)}>测试交互按钮1</Button>
            <Button type='primary' className="buttest">测试交互按钮2</Button>
            </Content>
        </Layout>
        <Footer style={{backgroundColor:'#3E3992',textAlign:'center',color:'aaaaa'}}>Footaaaaaaaaaaaaaaaaaaaaaaaaer</Footer>
    </Layout>

    );
}