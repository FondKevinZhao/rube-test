//用户信息数据 假设用户信息={user:'',isLogin:false}
//功能：1. 存储账号信息 2. 删除用户信息  3.修改
function login(state={user:'admin',islogin:false},action){
    //action操作当前state数据 action={ type:'',payload:''}
    switch (action.type) {
        case 'login/change':
            state.user = action.payload;
            //state是一个对象  地址不修改 内容修改了 认为state变量没有修改  视图不同步更新对象里面的属性  
            //新对象：{...obj}    Object.assgin(state,{})  
           return {...state};
        case 'login/delete':
            state.user = '';
           return {...state};
        case 'login/update':
            state.user = action.payload;
           return  {...state};
        default:
            return state;
    }
}

export default login