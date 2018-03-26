import React from 'react'
import Post from './Post'
import PostNewForm from './PostNewForm'

const PostList = props => {
  const postComponents = props.posts.map((post, index) => {
    return (
      <Post
        currentUser={props.currentUser}
        deletePost={props.deletePost}
        post={post}
        key={index}
        index={index}
      />
    )
  })
  return(
    <ul>
      <PostNewForm
        currentUser={props.currentUser}
        createPost={props.createPost}
      />
      {postComponents}
    </ul>
  )
}


export default PostList
