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
  methods: {
    loginHandler() {
      console.log(1)
    }
  },
}
</script>

<style>

</style>