//问题：页面首页有城市切换
//其他页面的数据获取 来自于当前的城市位置 推送数据 
function citys(state={city:'北京'},action){
    switch(action.type){
        case 'city/change'://局部命名作用域  reducer名称/type名称
            state.city = action.payload;
            return state;
        default:
            return state;

    }
}

export default citys