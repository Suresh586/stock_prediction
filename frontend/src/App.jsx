import { useState } from 'react'

import './assets/css/style.css'
import Header from './componenets/Header'
import Main from './componenets/Main'
import Footer from './componenets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Main />
     <Footer />
    </>
  )
}

export default App
