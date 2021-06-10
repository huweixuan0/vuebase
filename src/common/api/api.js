// 首先要制定一个 api 的原则 原则一般是这些：
// 干净纯粹
// 尽量不要处理数据
// 独立单一不要互相依赖
// 好处在于：不在 api 里面处理数据，api里面的接口和接口文档上一样。避免别人引用我的api，还要去看代码，只需要看文档就好了。

import {request} from '../http/http.js';

//用户登录

export const login = data => request('post','/auth/login', data)


//获取用户信息

export const getUserInfo = () => request('get','/auth/token', data)