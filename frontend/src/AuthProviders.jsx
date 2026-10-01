import {useState,useContext, createContext, Children} from 'react'

const AuthContext=createContext()

const AuthProviders = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(
        !!localStorage.getItem('accessToken')
    )
    

  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
   
  )
}

export default AuthProviders
export {AuthContext};