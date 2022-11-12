//网络请求 -- 方法
import axios from 'axios'
import base from './baseUrl'
console.log(base);

const api ={
    /* 
        1. 搜索接口 keyword 

    */
    getSearch(params){//params={后端变量：前端变量}
        return axios.get(base.serach,{
            params
        })
    },
    /* 
        2. 轮播接口
    */
   getBanner(){
        return axios.get(base.banner)
   },
   /* 
    3. 今日推荐
   */
  getTody(){
    return axios.get(base.tuijian)
  }
}

export default api