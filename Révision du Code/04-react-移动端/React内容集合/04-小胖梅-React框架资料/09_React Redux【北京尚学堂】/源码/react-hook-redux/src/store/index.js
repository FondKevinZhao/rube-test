//store仓库 数据和使用方法
import {ADD} from './types/type'
//1. 导入模块
import { createStore,applyMiddleware,combineReducers } from 'redux'
//导入中间件
import logger from 'redux-logger'
//导入外部reducer
import all from './actions/index'
/* //导入模块--reducers 
import login from './actions/login'
import num from './actions/num'
//合并reducer操作
const all = combineReducers({
    num,
    user:login
}) */
//2. 仓库store仓库  
//语法：const store = createStore(reducer函数-定义操作数据的方法,中间件检测数据是否有更新等操作)
const store = createStore(all,applyMiddleware(logger))

//导出store
export default store 

// store.dispatch({type:'login/change',payload:'xxxxx'})

/* //3. 定义reducer 
function reducer(state=100,action){
    //state定义store仓库数据  action操作的数据方法  action={type:'操作类型方法名',payload:'参数'}
    switch (action.type) {
        case 'add':
            state +=10;
            return state;
        case 'reduce':
            state -=10;
            return state;
        default:
            return state;
    }
}
 */
/* //4. reducer2 用户信息数据 假设用户信息={user:'',isLogin:false}
//功能：1. 存储账号信息 2. 删除用户信息  3.修改
function reducer2(state={user:'',islogin:false},action){
    //action操作当前state数据 action={ type:'',payload:''}
    switch (action.type) {
        case 'setUser':
            state.user = action.payload;
           return state;
        case 'delete':
            state.user = '';
           return state;
        case 'update':
            state.user = action.payload;
           return state;
        default:
            return state;
    }
}
 */
//自己使用仓库的方法 
// console.log('store',store);
// console.log('store.getState()',store.getState());
//自己调用store仓库action
//提供方法： dispatch(reducer函数action)
// store.dispatch({type:'setUser',payload:'admin'})
// store.dispatch({type:'add'})
// console.log('store.getState()',store.getState());

// store.dispatch({type:ADD})