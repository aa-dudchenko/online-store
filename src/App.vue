<template>
  <div id="app" class="App">

    <header class="Header">
      <router-link  :to = "{ name: 'catalog' }">
        <h1 class="Header-Title"> online-store </h1>
      </router-link>
    </header>

    <app-main-wrapper/> 

  </div>
</template>

<script>
import mainWrapper from './components/MainWrapper.vue'

export default {
  name: 'App',

  components: {
  'app-main-wrapper': mainWrapper,
  },

}
</script>
<style lang="scss">
@import "./assets/styles/styles.scss";

   .Header {
    background-color: #31475e;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-Title {
      color: #f9fbfd;
      // color: #3fb884;
      text-decoration: underline;
    }
  }


</style>
