import React from 'react'
import "./Post.css"

const Post = () => {
    return (
        <>
            <div className="post">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="texts">
                    <h2>Nike Shoes is the best</h2>
                    <p className="info">
                        <a href="/" className="author">Adarsh Kumar Singh</a>
                        <span className="time">
                            2023-01-06 16:45
                        </span>
                    </p>
                    <p className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto saepe labore, maxime cum aut sint molestiae veniam ab reprehenderit voluptates eius cumque iusto unde magni? At perferendis impedit iste repellendus?</p>
                </div>
            </div>
        </>
    )
}

export default Post