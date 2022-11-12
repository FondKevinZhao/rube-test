import Home from '../pages/Home'
import News from '../pages/News'
import User from '../pages/User'
import Xiangqing from '../pages/Xiangqing'
import Index from '../pages/wendang/Index'
import Start from '../pages/wendang/Start'
import Cdn from '../pages/wendang/Cdn'
import Login from '../pages/Login'
import Layout from '../pages/Layout'
import { Navigate } from 'react-router-dom'
//定义路由配置文件 数组--对象 路径
const routes=[
    {
        path:'',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/news',
                element:<News/>
            },
            {
                path:'/user',
                element:<User/>
            },
            {
                path:'/xiangqing/:id',
                element:<Xiangqing/>
            },{
                path:'/wendang',
                element:<Index/>,
                children:[
                    {
                        index:true,
                        element:<Start/>
                    },
                    {
                        path:'start',
                        element:<Start/>
                    },
                    {
                        path:'cdn',
                        element:<Cdn/>
                    }
                ]
            },
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:'/*',
        element:<Navigate to='/'/>
    }
]

export default routes