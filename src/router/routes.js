import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login.vue'

export default [
  {
    path:'/msite',
    component:MSite,
    meta:{
      isShowFooterGuider:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShowFooterGuider:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isShowFooterGuider:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShowFooterGuider:true
    }
  },
  {
    path:'/',
    redirect:'/msite'
  },
  {
    path:'/login',
    component:Login
  },
]
