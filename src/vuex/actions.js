import {reqAddress,reqCategorys,reqShops} from '@/api'
import {RECIEVE_ADDRESS,RECIEVE_SHOPS,RECIEVE_CATEGORYS} from './types'
export default {
  async getAddress({commit,state}){
    let {latitude,longitude} = state
    let result = await reqAddress(latitude,longitude)
    let {code,data} = result
    if(code===0){
      commit(RECIEVE_ADDRESS,data)
    }else{
      alert('请求失败')
    }
  },
  async getCategorys({commit}){
    let result = await reqCategorys()
    let {code,data} = result
    if(code===0){
      commit(RECIEVE_CATEGORYS,data)
    }else{
      alert('请求失败')
    }
  },
  async getShops({commit,state}){
    let{latitude,longitude} = state
    let result = await reqShops(latitude,longitude)
    let {code,data} = result
    if(code===0){
      commit(RECIEVE_SHOPS,data)
    }else{
      alert('请求失败')
    }
  }
}