import React, { Component } from 'react'

class PostNewForm extends Component {
  state = {
    newPost: {}
  }

  handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedNewPost = { ...this.state.newPost }
    updatedNewPost[attributeToChange] = newValue
    this.setState({ newPost: updatedNewPost })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createPost(this.state.newPost)
    this.setState({newPost:{}})
  }

  render() {
    return (
      <div>
        <h2>Create New Idea</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="post">Post</label>
              <textarea
                name="post"
                onChange={this.handleChange} />
              </div>

              <div>
                <input type="submit" value="Create Post"/>
              </div>
            </form>

          </div>
        )
      }
    }

    export default PostNewForm
