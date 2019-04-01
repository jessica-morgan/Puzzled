import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from './Home'
import LionPuzzle from './LionPuzzle'
import FishPuzzle from './FishPuzzle'
import LiliesPuzzle from './LiliesPuzzle'


const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/animals' component={LionPuzzle}/>
      <Route path='/animals/fish' component={FishPuzzle}/>
      <Route pather='/nature' component={LiliesPuzzle}/>
    </Switch>
  </div>
)

export default withRouter(App)