import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import axios from 'axios'
import ProfilePage from './components/ProfilePage'
import {Link} from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: {}
  }
  async componentDidMount() {
      try {
          const response = await axios.get('/users-api/users/1')
          console.log("this is firing")
          this.setState({ currentUser: response.data })
      } catch (error) {
          console.log('Error retrieving ideas!')
      }
  }
  render() {
    const HomeComponent = () => (<Home currentUser={this.state.currentUser}/>);
    const ProfileComponent = () => (<ProfilePage currentUser={this.state.currentUser}/>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path='/profile' render={ProfileComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
