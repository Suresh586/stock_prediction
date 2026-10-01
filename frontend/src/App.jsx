import { useState } from 'react'

import './assets/css/style.css'
import Header from './componenets/Header'
import Main from './componenets/Main'
import Footer from './componenets/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './componenets/Register'
import Login from './componenets/Login'
import AuthProviders from './AuthProviders'
import DashBoard from './componenets/dashboard/DashBoard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProviders>
    <BrowserRouter>
    <Header />
       <Routes>
         <Route  path='/' element={<Main />}/>
         <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
         <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
         <Route path='/dashboard' element={<PrivateRoute> <DashBoard /></PrivateRoute>}/>
       </Routes>
        <Footer />
    </BrowserRouter>
    </AuthProviders>
     
    
    </>
  )
}

export default App
