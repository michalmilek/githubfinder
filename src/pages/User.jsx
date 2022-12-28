import React from 'react'
import Navbar from '../components/Navbar'
import UserItem from '../components/UserItem'
import Footer from '../components/Footer'
import './User.scss'
import { useParams } from 'react-router-dom'

const User = () => {
  const { user } = useParams()

  return (
    <div className='user'>
    <Navbar />
    <UserItem user={user}/>
    <Footer />
</div>
  )
}

export default User