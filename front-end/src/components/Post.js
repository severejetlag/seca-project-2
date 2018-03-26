import React from 'react'

const Post = props => {
  const isCurrentUser = props.post.user.userName === props.currentUser.userName
  return(
    <li>
      <hgroup>
        <h2>{props.post.title}</h2>
        <h3>{props.post.user.userName}</h3>
      </hgroup>
      <p>{props.post.post}</p>
      {isCurrentUser}
      {
        isCurrentUser ?
        <button onClick={() => props.deletePost(props.post.id, props.index)}>
          Delete Product
        </button>
        : ""
      }
    </li>
  )

}

export default Post
