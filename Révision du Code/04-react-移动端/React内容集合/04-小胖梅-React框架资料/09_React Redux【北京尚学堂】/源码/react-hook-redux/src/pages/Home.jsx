import React from 'react'
import { connect} from 'react-redux'
import Login from './Login';
//connect高阶组件 
//语法：connect((state数据)=>{},(dispatch操作actions)=>{})(组件名称)
 function Home(props) {
    console.log('-----',props);
    //定义
    function changeUser(){
        props.change('lalalala')
    }
  return (
    <div>
        <h2>网站首页</h2>
        <p>获取用户名：{props.userinfo.user}</p>
        <button onClick={changeUser}>修改用户名 rose </button>
        <button onClick={()=>props.delete()}>清空用户</button>
        <hr />
        <Login/>
    </div>
  )
}
//拆分结构
//state仓库数据
function mapStateProps(state){
    return {
        userinfo:state.user
    } 
}
//仓库dispatch方法
function mapDispatch(dispatch){
    return{
        change:function(val){ return dispatch({type:'login/change',payload:val})   },
        delete:()=>dispatch({type:'login/delete',payload:''})
    }
}

export default connect(mapStateProps,mapDispatch)(Home)

/* 
export default connect((state)=>{
    console.log(state);
    //return的作用 把需要的数据 return出去 给Home组件使用 
    return {
        userinfo:state.user
    }
},(dispatch)=>{
    // console.log(dispatch);//调用store仓库里面的actions操作
    // dispatch({type:'login/change',payload:'xxx'})
    return{
        change:function(val){ return dispatch({type:'login/change',payload:val})   },
        delete:()=>dispatch({type:'login/delete',payload:''})
    }
})(Home) 
*/