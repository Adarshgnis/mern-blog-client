import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostPage = () => {

    const [postInfo, setPostInfo] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        fetch(`https://backendapi-sbss.onrender.com/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo)
            })
        })
    }, [])

    if (!postInfo) return ''
    
    return (
    <div className="post-page">
      <div className="image">
        <img src={`https://backendapi-sbss.onrender.com/${postInfo.cover}`} alt=""/>
      </div>
      <h1>{postInfo.title}</h1>
      {/* {postInfo.content} */}
      <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}

export default PostPage
