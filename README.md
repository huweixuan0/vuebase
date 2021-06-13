# vhhh

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## base 组件 VUE-ROUTE（路由守卫/页面刷新）/VUEX/MOCK（请求拦截）/AXIOS（请求封装）/配置档Config（配置BaseUrl不打包）/baseFunc/CSS/SASS/登陆页面无导航

## 1.文件布局

## 1.iis 打包后js文件访问不到 http://10.51.80.226/static/js/manifest.2ae2e69a05c33dfc65f8.js 404 not found  do: config/index.js  修改：assetsPublicPath: '/',为assetsPublicPath: './',

## 2.写登陆
### 0>封装axios请求 /src/common/http/http.js
### 1>管理API接口   /src/common/http/api.js
### 1>mock模拟接口地址 安装mock.js npm install mockjs --save-dev  通过mockjs，模拟restfu规范的api接口。
#### 成功返回数据Like：

    {
	"code": 200,
	"msg": "登陆成功，token返回成功",
	"data": {
		"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VyTmFtZSI6IkUwMTk1NiIsImlhdCI6MTYyMzMwMjgxMSwiZXhwIjoxNjIzMzEwMDExLCJFTWFpbCI6IiIsIlVzZXJJZCI6IuiDoee7tOi9qSIsIkRlcGFydG1lbnQiOiJGQSIsIk1vZHVsZSI6IkZBIiwiUm9sZSI6IklUIiwiUG93ZXIiOjUsIlBhc3N3b3JkIjoiIiwiSFJfTWFpbE5hbWUiOiJodXdlaXh1YW4iLCJIUl9QV0QiOiJFMDE5NTYiLCJIUl9EZXBhcnRtZW50IjoiUEI4MSIsIkhSX1N1YkRlcGFydCI6IjAxIn0.I-pA1l8z28dXZuGlOFUl7CWfwO7EEJgGYwsFTvNPlns"
	}
}

#### 错误返回数据

    {
	"code": 101,
	"msg": "登陆失败",
	"data": null
}
#### 登陆逻辑：1.登陆接口，登陆后保存token，并跳转到home；2.home携带token请求获取用户信息；3.路由，刷新重新保存token，根据是否有token做路由守卫。

## 3.使用sass