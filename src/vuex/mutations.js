import {RECIEVE_ADDRESS,RECIEVE_SHOPS,RECIEVE_CATEGORYS} from './types'
export default {
  [RECIEVE_ADDRESS](state,address){
    state.address = address
  },
  [RECIEVE_CATEGORYS](state,categorys){
    state.categorys = categorys
  },
  [RECIEVE_SHOPS](state,shops){
    state.shops = shops
  }
}