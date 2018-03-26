import React, {Component} from 'react'
import Nav from './Nav'

class ProfilePage extends Component {
  state = {

  }

  render(){
    return(
      <main>
        <Nav/> 
        <hgroup>
          <h1>{this.props.currentUser.userName}</h1>
        </hgroup>
        <ul>
          <li>Name: {this.props.currentUser.firstName} {this.props.currentUser.lastName}</li>
          <li>City: {this.props.currentUser.city}</li>
        </ul>
      </main>
    )
  }
}

export default ProfilePage
