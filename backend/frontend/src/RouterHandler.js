import React from 'react'
import {Switch , Route, Router, Redirect} from 'react-router-dom'
import App from './App'
import Signup from './SIgnup'
function RouteHandler (){

 return (

    <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
    </div>
 )
}

export default RouteHandler