import React from 'react'
import "./Post.css"
import {format} from "date-fns"
import { Link } from 'react-router-dom'

const Post = ({_id,title,summary,cover,content,createdAt,author}) => {
    return (
        <>
            <div className="post">
                <div className="image">
                    <Link to={`/post/${_id}`}>
                        <img src={'https://backendapi-sbss.onrender.com/'+cover} alt="" />
                    </Link>
                </div>
                <div className="texts">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2> 
                </Link>
                    <p className="info">
                        <a className="author">{author?.username}</a>
                        <span className="time">
                            {format(new Date(createdAt), 'd MMM, yyyy HH:mm')}
                        </span>
                    </p>
                    <p className="summary">{summary}</p>
                </div>
            </div>
        </>
    )
}

export default Post