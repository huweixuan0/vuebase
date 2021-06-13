<template>
  <div id="app">
    <navigation v-if="!$route.meta.showNav" />
    <router-view/>
  </div>
</template>
<script>
import navigation from './components/navigation/index.vue'

export default {
  name: 'App',
  data() {
    return {
      showNav: false
    }
  },
   components: {
    navigation
  }
}
</script>

<style lang="scss" >
@import './assets/styles/index.scss';
</style>
