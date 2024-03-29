import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import "./Navbar.css"

const Navbar = () => {

  const {setUserInfo,userInfo} = useContext(UserContext)

  useEffect(() => {
    const abc = async () => {
      await fetch('https://backendapi-sbss.onrender.com/profile', {
        credentials: 'include',
      }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      });
    }
    abc()
  },[]);

  function logout() {
    fetch('https://backendapi-sbss.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username

  return (
    <header>
        <Link className="logo" to="/" >MyBlog</Link>

        <nav>
          {username && (
            <>
              <Link to="/create">Create new post</Link>
              <Link onClick={logout}>Logout</Link>
            </>
          )}
          {!username && (
            <>
              <Link to="/login" >Login</Link>
              <Link to="/register" >Register</Link>
            </>
          )}
        </nav>
      </header>
  )
}

export default Navbar