<template>
  <div class="guider">
    <div class="guider-item " :class="{on:$route.path==='/msite'}" @click="goto('/msite')">
      <span><i class="iconfont icon-waimai"></i></span>
      <span>外卖</span>
    </div>
    <div class="guider-item" :class="{on:$route.path==='/search'}" @click="goto('/search')">
      <span><i class="iconfont icon-nav_serch_icon"></i></span>
      <span>搜索</span>
    </div>
    <div class="guider-item" :class="{on:$route.path==='/order'}" @click="goto('/order')">
      <span><i class="iconfont icon-order"></i></span>
      <span>订单</span>
    </div>
    <div class="guider-item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
      <span><i class="iconfont icon-user_3"></i></span>
      <span>我的</span>
    </div>
    
  </div>
</template>

<script>
export default {
 name:'FooterGuide',
 methods:{
   goto(path){
     this.$router.replace(path)
   }
 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixins.styl"

  .guider
    top-border-1px(#cccccc)
    display flex
    position fixed
    left 0
    bottom 0
    height 50px
    width 100%
    background #fff
    .guider-item
      display flex
      flex-direction column
      text-align center
      width 25%
      &.on
        color $green
      span
        margin-top 3px
        font-size 12px
        i
          font-size 22px
      
      
        
      


    
</style>
