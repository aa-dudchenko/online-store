<template>
  <div id="app">
  <app-main-wrapper/> 
  </div>
</template>

<script>
import mainWrapper from './components/MainWrapper.vue'

export default {
  name: 'App',
  components: {
  'app-main-wrapper': mainWrapper,
  }
}
</script>
<style lang="scss">
@import "./assets/styles/styles.scss";



  
</style>
