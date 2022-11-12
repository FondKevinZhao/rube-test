import React, { Component } from 'react'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Login from './pages/Login/Login'
import Layout from './pages/Layout/Layout'
import {BrowserRouter,Switch,Route,NavLink,Redirect} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
     <BrowserRouter> 
      <Switch>
        <Route path='/login'  component={Login}/>
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/shop' component={Shop} />
        </Layout>
   
      </Switch>
     </BrowserRouter>
    )
  }
}
