<template>
  <div>
      home
      <button @click="Signout">退出登录</button>
  </div>
</template>

<script>

export default {
  created(){
    this.$apis.getUserInfo().then(res=>{
      console.log(res)
    })
   console.log("home")
  },
  methods:{
    Signout(){
      this.$store.commit("del_token")
      this.$router.push({
        path:"/login"
      })
    }
  }

  
}
</script>

<style>

</style>