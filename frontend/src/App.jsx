import { useState } from 'react'

import './assets/css/style.css'
import Header from './componenets/Header'
import Main from './componenets/Main'
import Footer from './componenets/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './componenets/Register'
import Login from './componenets/Login'
import AuthProviders from './AuthProviders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProviders>
    <BrowserRouter>
    <Header />
       <Routes>
         <Route  path='/' element={<Main />}/>
         <Route path='/register' element={<Register />} />
         <Route path='/login' element={<Login />} />
       </Routes>
        <Footer />
    </BrowserRouter>
    </AuthProviders>
     
    
    </>
  )
}

export default App
