//网络请求 -- 方法
import axios from 'axios'
import base from './baseUrl'
import qs from 'querystring'
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
  },
  /**
   * 4. 登录接口
   * user_id	String	服务器默认：iwen@qq.com
     password	String	服务器默认：	iwen123
     verification_code	String	服务器默认：crfvw

   */
  getLogin(obj){
    //axios.post('url','xx=xx&xx=xx').then()
    return axios.post(base.baseUrl+base.login,qs.stringify(obj))
  }
}

export default api