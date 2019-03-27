import React from 'react'
import { withRouter, Link } from 'react-router-dom'


const App = () => (
  <div>
    <h1>Puzzled</h1>
    <h3>Category</h3>
      <Link to='/animals'>Animals</Link>
  </div>
)

export default withRouter(App)