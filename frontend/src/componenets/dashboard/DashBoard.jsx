import React, { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance'
const DashBoard = () => {
  
  useEffect(()=>{
    const fetchProtectedData=async () =>{
      try{
        const response=await axiosInstance.get('/protected-view/')
        console.log("Success :", response.data)
      }catch(error){
        console.error('Error fetching data :',error)
      }
    }
    fetchProtectedData();
  },[])
  return (
    <div className='text-light'>DashBoard</div>
  )
}

export default DashBoard