import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from './Home'
import LionPuzzle from './LionPuzzle'
import FishPuzzle from './FishPuzzle'
import LiliesPuzzle from './LiliesPuzzle'
import IndiaPuzzle from './IndiaPuzzle';


const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/animals' component={LionPuzzle}/>
      <Route path='/animals/fish' component={FishPuzzle}/>
      <Route path='/nature' component={LiliesPuzzle}/>
      <Route path='/places' component={IndiaPuzzle}/>
    </Switch>
  </div>
)

export default withRouter(App)