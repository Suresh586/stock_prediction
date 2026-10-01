import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
   <>
   
    <div className='contaner'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>A professional stock prediction portal relies on 
          robust market screening tools and data-driven predictive modules to project underlying market health
        Aggregates bottom-up analyst target prices to establish probabilistic market sentiment parameter
          </p>
          <Button text="Login" class='btn-outline-warning'/>
          
      </div>

    </div>
   
    </>
  )
}

export default Main