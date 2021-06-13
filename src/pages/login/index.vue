<template>
  <div>
      <input type="text" v-model="username">
      <input type="text" v-model="password">
      <button @click="loginHandler">确认</button>
  </div>
</template>

<script>
export default {
  name:'login',
  data() {
    return {
      username: "",
      password:""
    }
  },
  create(){
  },
  methods: {
    loginHandler() {
      this.$apis.login({username:this.username,password:this.password}).then(res=>{
        console.log(res)
        if(res.code==200){
        console.log("登陆成功")
        
      this.$store.commit("set_token", res.data.token);
      this.$router.push({
        path:"/"
      })
        }
      
    })
    }
  },
}
</script>

<style>

</style>