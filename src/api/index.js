/*
 * @Author: your name
 * @Date: 2022-04-02 11:53:23
 * @LastEditTime: 2022-04-02 14:57:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \doc\src\api\INDEX.JS
 */

import ajax from './ajax'

export const reqText = (ip) => ajax ('/home',{ip},'POST')