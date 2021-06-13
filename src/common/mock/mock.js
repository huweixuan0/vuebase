import Mock from 'mockjs'

const Random = Mock.Random
// 设置全局延时，没有延时的话，有时候会检测不到数据变化
Mock.setup({
  timeout: '300-600'
})
// 创建一个数组用来接收模拟的数据
const mocklist = []
const count = 5;

const _api ={
  login:"http://localhost:8080/api/auth/login",
  token:"http://localhost:8080/api/auth/token",
}


for (let i = 0; i < count; i++) {
  mocklist.push(Mock.mock({
    id: '@id',
    name: '@cname',
    'phone|1': /^1[0-9]{10}$/,
    email: '@email',
    'education|1': ['本科', '大专', '硕士', '博士', '中专'],
    'graduationschool|1': ['西南财经', '北京交通大学', '重庆工商大学', '清华大学', '西南大学', '上海复旦大学'],
    'profession|1': ['教授', '律师', '医生', '公务员', '大学老师', '警察', '白领'],
    profile: '@cparagraph'
  }))
}

function MsgSuc(msg,obj){
  return{
    code:200,
    msg,
    data:obj
  }
}

function MsgErr(msg,obj){
  return{
    code:101,
    msg,
    data:obj
  }
}
//登陆验证，返回token
function Login(options){
  console.log(11111,options)
  if(JSON.parse(options.body).password == "EE01956"){
    return MsgSuc("登陆成功",Mock.mock({
      token:'@id'
    }))
  }else{
    return MsgErr("登陆失败",null)
  }
}

// Department: "FA"
// EMail: ""
// HR_Department: "PB81"
// HR_MailName: "huweixuan"
// HR_PWD: "E01956"
// HR_SubDepart: "01"
// Module: "FA"
// Password: ""
// Power: 5
// Role: "IT"
// Roles: null
// UserId: "胡维轩"
// UserName: "E01956"
//获取用户信息

function getUsf(options){
  console.log(options)
  return MsgSuc("success",Mock.mock({
    "Department|1-2": "FA",
    EMail: "",
    HR_Department: "PB81",
    HR_MailName: "huweixuan",
    HR_PWD: "E01956",
    HR_SubDepart: "01",
    Module: "FA",
    Password: "",
    Power: 5,
    Role: "IT",
    Roles: null,
    UserId: "胡维轩",
    UserName: "E01956"
  }))
}


// 获取用户信息列表
function getList() {
  // 若 localStorage 没有数据，则将 Mock 的数据存入
  if (!localStorage.getItem('userlist')) {
    localStorage.setItem('userlist',JSON.stringify(mocklist))
  }
  // 每次获取数据时，再从 localStorage 中拉取数据
  var userlist = JSON.parse(localStorage.getItem('userlist'))
  return userlist
}

// 删除用户信息
function deleteUser(options) {
  // 先从 localStorage 中拉取数据
  var userlist = JSON.parse(localStorage.getItem('userlist'))
  // 根据传递的 id 删除 用户
  for( let index in userlist ) {
    if (userlist[index].id === options.body) {
      userlist.splice(index,1)
      localStorage.setItem('userlist', JSON.stringify(userlist))
    }
  }
  return {
    data: '用户删除成功'
  }
}

// 添加用户信息
function addUser(options) {
  // 先从 localStorage 中拉取数据
  var userlist = JSON.parse(localStorage.getItem('userlist'))
  // 获取传入用户信息对象，是一个字符串，需要转化为对象
  var user = JSON.parse(options.body)
  // 使用 mock 随机生成一个 id
  user.id = Random.id()
  // 将 user 插入到 userlist 中
  userlist.unshift(user)
  // 重新将 userlist 存入 localStorage 中
  localStorage.setItem('userlist', JSON.stringify(userlist))
  return {
    data: '用户添加成功'
  }
}

// 更新用户信息
function updateUser(options) {
  // 先从 localStorage 中拉取数据
  var userlist = JSON.parse(localStorage.getItem('userlist'))
  var user = JSON.parse(options.body)
  // 遍历 userlist 根据传入对象的 id 更新用户信息
  for ( let index in userlist ) {

    if ( userlist[index].id === user.id ) {
      userlist[index] = user
    }
  }
  localStorage.setItem('userlist', JSON.stringify(userlist))
  return {
    data: '用户更新成功'
  }
}


Mock.mock(_api.login,'post',Login)
Mock.mock(_api.token,'get',getUsf)
// 制作各个接口
Mock.mock('http://localhost:8080/getlist', 'get', getList)
//Mock.mock('/getuser', 'post', getUser)
Mock.mock('/deleteuser', 'post', deleteUser)
Mock.mock('/adduser', 'post', addUser)
Mock.mock('/updateuser', 'post', updateUser)

// 最后将 Mock 导出
export default Mock