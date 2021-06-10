<template>
  <div>
      home
  </div>
</template>

<script>

export default {
  created(){
   this.$apis.login({username:"E01956",password:"EE01956"}).then(res=>{
      console.log(res)
    })
  }
}
</script>

<style>

</style>