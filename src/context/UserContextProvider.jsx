import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return(
        // use value prop here to specify the provider which value access do want
        // use value prop here to specify the provider which value access do want
        <UserContext.Provider value={{user, setUser}}>  
            {children}            
        </UserContext.Provider>
        // wrap data unnder UserContextProvider to provide acesss
    )
}

export default UserContextProvider;