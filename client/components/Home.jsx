import React from 'react'
import { withRouter, Link } from 'react-router-dom'


const Home = () => (
  <body className='home-page'>
  <div>
    <h1 className='puzzled-title'>Puzzled</h1>
    <p className='home-page-subhead'>Pick a category</p>
     <br/>
     <Link to='/animals' style={{ textDecoration: 'none'}}>
     <button className='button'>Animals</button>
     </Link>
     <br/>
     <Link to='/nature' style={{ textDecoration: 'none'}}>
     <button className='button'>Nature</button>
     </Link>
     <br/>
     <Link to='/food' style={{ textDecoration: 'none'}}>
     <button className='button'>Food</button>
     </Link>
     <br/>
     <br/><br/><br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
  </div>
  </body>
)

export default withRouter(Home)