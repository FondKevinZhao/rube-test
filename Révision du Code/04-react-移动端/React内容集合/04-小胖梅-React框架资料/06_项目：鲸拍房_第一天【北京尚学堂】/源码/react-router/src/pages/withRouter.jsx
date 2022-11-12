//高阶组件 函数导出函数  传递参数--组件  
// 获取动态路由参数
import { useParams } from 'react-router-dom'  
 
export function withRouter( Child ) {
    return ( props ) => {
    //   const location = useLocation();
    //   const navigate = useNavigate();
      const params = useParams()
      return <Child params={params} />;
    }
  }