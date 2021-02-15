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
    width 100%
    height 50px
    top-border-1px(#cccccc)
    position fixed
    bottom 0
    left 0
    display flex
    .guider-item
      width 25%
      margin-top 5px
      font-size 14px
      display flex
      flex-direction column
      text-align center
      &.on
        color $green
      span
        i
          font-size 24px
      
      
        
      


    
</style>
