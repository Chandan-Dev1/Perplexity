import React from 'react'
import {useSelector} from 'react-redux'
import { Form } from 'react-router-dom';

const Dashboard = () => {
    const {user} =useSelector(state=>state.auth)
    console.log(user)
  return (
   <div className="">Dashboard</div>
  )
}

export default Dashboard
