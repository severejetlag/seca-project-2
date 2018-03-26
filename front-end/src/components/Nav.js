import React from 'react'
import {Link} from 'react-router-dom';

const Nav = props => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
    </nav>
  )
}

export default Nav
