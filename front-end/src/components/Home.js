import React, { Component } from 'react';
import PostList from './PostList'
import axios from 'axios'

class Home extends Component {
  state={
    posts:[]
  }

  async componentDidMount() {
      try {
          const response = await axios.get('/posts-api/posts')
          this.setState({ posts: response.data })
      } catch (error) {
          console.log('Error retrieving ideas!')
      }
  }
  render() {
    return (
      <div>
        <hgroup>
          <h1>Faux Reddit!</h1>
          <h2>{this.props.currentUser.userName}</h2>
        </hgroup>
        <PostList posts={this.state.posts}/>
      </div>
    );
  }
}

export default Home;
