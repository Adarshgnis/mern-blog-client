import React, { useState } from 'react'

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(ev) {
    ev.preventDefault()
    //now we need to send a POST request so let's use fetch
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      //because this is a JSON we need to send some headers
      headers: {'Content-Type':'application/json'},
    })
    if(response.status === 200) {
      alert('registeration sucessful')
    } else {
      alert('registeration failed')
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input type="password"
        placeholder="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  )
}

export default Register