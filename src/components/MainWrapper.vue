<template>
  <div class="MainWrapper">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>


<script>
export default {
  name: 'MainWrapper',
 
}
</script>


<style lang="scss">
  .MainWrapper {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
  }
</style>