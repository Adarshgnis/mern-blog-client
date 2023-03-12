import React, { useEffect, useState } from 'react'
import Post from '../../components/Post/Post'
import "./Home.css"

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://backendapi-sbss.onrender.com/post').then(response => {
      response.json().then(posts => {
        console.log(posts)
        setPosts(posts)
      })
    })
  }, [])

  console.log(posts)
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post}/>
      ))}
    </>
  )
}

export default Home