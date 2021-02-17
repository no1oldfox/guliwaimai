import ajax from './ajax'

//根据经纬度获取位置详情
export const reqAddress = (latitude,longitude)=>{
  return ajax.get(`/position/${latitude},${longitude}`)
}

//获取食品分类列表
export const reqCategorys = ()=>{
  return ajax.get(`/index_category`)
}

//根据经纬度获取商铺列表
export const reqShops = (latitude,longitude)=>{
  return ajax.get(`/shops`,{params:{latitude,longitude}})
}