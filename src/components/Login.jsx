import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

     const {setUser} = useContext(UserContext)  
     //in this method you have the access of all the variables and methods that has been declared under Context provider 

    const handlesubmit = (e) => {
        e.preventDefault()
        // alert(username)
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login:</h2>
      <input type='text' 
      value={username} 
      onChange={(e) => setUsername(e.target.value)}
      style={{ marginRight: '10px' }}
      placeholder='Username' />
      <input type='text' 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      style={{ marginRight: '10px' }}
      placeholder='Password'/>
      <button className="btn btn-sm" onClick={handlesubmit} style={{ backgroundColor: 'blue', color: 'white'  }}>Submit</button>
    </div>
  )
}

export default Login
