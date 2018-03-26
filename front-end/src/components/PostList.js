import React,{Component} from 'react'
import Post from './Post'

const PostList = props => {
  const postComponents = props.posts.map((post, index) => {
    return <Post post={post} key={index} index={index}/>
  })
  return(
    <ul>
      {postComponents}
    </ul>
  )
}


export default PostList
