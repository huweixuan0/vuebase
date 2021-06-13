// # 修改一些基础的配置：请求地址，超时，其他的杂七杂八的
// # 统一操作：统一处理错误，统一处理请求参数和格式，响应参数和格式。统一处理 message，统一拦截挂载等等
// # 

import axios from 'axios'
import store from '@/common/vuex/vuex'
// console.log(window.config.ip)
var vHttp = axios.create({
    baseURL:window.config.ip
})

vHttp.interceptors.request.use(config => { // 请求拦截器配置 // 可不配置
    // do sth
      if(store.state.token){
        config.headers['ApiAuthorization']=store.state.token
        }
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

vHttp.interceptors.response.use(response => { // 响应拦截器配置 // 可不配置
    // do something
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

function get(url,params){
    return new Promise((resolve,reject)=>{
    vHttp.get(url,{
        params:params
      }).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.data)
      })
    })
  }
  function del(url,params){
    return new Promise((resolve,reject)=>{
    vHttp.delete(url,{
        params:params
      }).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.data)
      })
    })
  }
  function post(url,params){
    return new Promise((resolve,reject)=>{
    vHttp.post(url,params).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.data)
      })
    })
  }
  function put(url,params){
    return new Promise((resolve,reject)=>{
    vHttp.put(url,params).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.data)
      })
    })
  }

  export function request(method,url,params){
    if(method=='get'){
      return get(url,params)
    }else if(method=='delete'){
      return del(url,params)
    }else if(method=='post'){
      return post(url,params)
    }else if(method=='put'){
      return put(url,params)
    }
  }