import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from './Home'
import LionPuzzle from './LionPuzzle'
import FishPuzzle from './FishPuzzle'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/animals' component={LionPuzzle}/>
      <Route path='/animals-fish' component={FishPuzzle}/>
    </Switch>
  </div>
)

export default withRouter(App)