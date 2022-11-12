import React from 'react'
import routes from './router/router'
import './app.css'
//导入路由
import { useRoutes } from 'react-router-dom'

export default function App(){
  let element=useRoutes(routes);
    return (<>
          {element}
      </>)
  }
