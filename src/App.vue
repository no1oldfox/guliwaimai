<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide/>
    
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide.vue'

export default {
  mounted(){
    this.$store.dispatch('getAddress')
  },
  components: {
    FooterGuide
  }
}
</script>

<style >
</style>
