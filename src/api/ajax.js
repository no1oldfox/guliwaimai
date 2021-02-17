import axios from 'axios'
import qs from 'qs'


const instance = axios.create({
  baseURL:'/api',
  timeout:1000,

})

instance.interceptors.request.use((config)=>{
  if(config.data instanceof Object){
    config.data = qs.stringify(config.data)
  }
  return config
})

instance.interceptors.response.use((res)=>{
  return res.data
},(err)=>{
  alert(err.message)
  return new Promise(()=>{})
})


export default instance