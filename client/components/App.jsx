import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from './Home'
import LionPuzzle from './LionPuzzle'
import FishPuzzle from './FishPuzzle'
import Test from './Test'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/animals' component={LionPuzzle}/>
      <Route path='/animals-fish' component={FishPuzzle}/>
      <Route path='/test' component={Test}/>
    </Switch>
  </div>
)

export default withRouter(App)