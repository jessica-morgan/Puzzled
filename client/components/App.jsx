import React from 'react'
import { Route, withRouter} from 'react-router-dom'
import Home from './Home'
import LionPuzzle from './LionPuzzle'

const App = () => (
  <div>
      <Route exact path='/' component={Home}/>
      <Route path='/animals' component={LionPuzzle}/>
  </div>
)

export default withRouter(App)