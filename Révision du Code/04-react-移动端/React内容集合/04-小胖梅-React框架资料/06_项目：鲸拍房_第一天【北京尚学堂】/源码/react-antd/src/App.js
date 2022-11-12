import React, { Component } from 'react'
import Home from './pages/Home/Home'
import NewHouse from './pages/NewHouse/NewHouse'
import Login from './pages/Login/Login'
import Layout from './pages/Layout/Layout'
import {BrowserRouter,Switch,Route,NavLink,Redirect} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
     <BrowserRouter> 
      <Switch>
        <Layout path='' exact>
          <Route exact path='/' component={Home} />
          <Route path='/new' component={NewHouse} />
        </Layout>
        <Route path='/login'  component={Login}/>
      </Switch>
     </BrowserRouter>
    )
  }
}
