import {ADD} from '../types/type'
//3. 定义reducer 
function reducer(state=100,action){
    //state定义store仓库数据  action操作的数据方法  action={type:'操作类型方法名',payload:'参数'}
    switch (action.type) {
        case ADD:
            state +=10;
            return state;
        case 'reduce':
            state -=10;
            return state;
        default:
            return state;
    }
}

export default reducer