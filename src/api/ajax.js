/*
 * @Author: your name
 * @Date: 2022-04-02 11:19:46
 * @LastEditTime: 2022-04-02 13:23:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \doc\src\api\ajax.js
 */
import axios from 'axios'
import { message } from 'antd'

export default function ajax(url,data={},method = 'GET'){
    return new Promise(function(resolve,reject){
        let promise
        if (method === 'GET') {
            promise = axios.get(url, {params: data}) // params 配置指定的是 query 参数
        } else {
            promise = axios.post(url, data)
        }
            promise.then(response => {
// 如果成功了, 调用 resolve(response.data)
            resolve(response.data)
        }).catch(error=>{ //对所有ajax请求出错做统一处理,外层就不用再处理错误了
// 如果失败了, 提示请求后台出错
         message.error('请求错误: ' + error.message) 
        })
    }) 
}
 