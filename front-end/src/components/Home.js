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

  createPost = async (post, index) => {
    post.user = this.props.currentUser
    try {
        const newPostResponse = await axios.post(`/posts-api/posts`, post)

        const updatedPostList = [...this.state.posts]
        updatedPostList.push(newPostResponse.data)
        this.setState({posts: updatedPostList})

    } catch(error) {
        console.log('Error creating new User!')
        console.log(error)
    }
  }

  render() {
    return (
      <div>
        <hgroup>
          <h1>Faux Reddit!</h1>
          <h2>{this.props.currentUser.userName}</h2>
        </hgroup>
        <PostList
          posts={this.state.posts}
          createPost={this.createPost}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default Home;
