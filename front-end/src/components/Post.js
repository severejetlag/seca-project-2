import React,{Component} from 'react'

const Post = props => {
  return(
    <li>
      <hgroup>
        <h2>{props.post.title}</h2>
        <h3>{props.post.user.userName}</h3>
      </hgroup>
      <p>{props.post.post}</p>
    </li>
  )

}

export default Post
