import {combineReducers} from 'redux'
//导入模块--reducers 
import login from './login'
import num from './num'
import citys from './citys'
//合并reducer操作
const all = combineReducers({
    num,
    user:login,
    citys
})

export default all