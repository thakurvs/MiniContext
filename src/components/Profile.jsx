import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)  //fetching the value from login component using UserContext with UseContext hook
    
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username} And Your password is {user.password} </div>
   
  
}

export default Profile
