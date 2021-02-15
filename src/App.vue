<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide/>
    
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide.vue'

export default {
  components: {
    FooterGuide
  }
}
</script>

<style >
</style>
