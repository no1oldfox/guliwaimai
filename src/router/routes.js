import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'

export default [
  {
    path:'/msite',
    component:MSite
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/',
    redirect:'/msite'
  },
]
