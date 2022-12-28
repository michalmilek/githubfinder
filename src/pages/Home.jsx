import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Form />
        <Footer />
    </div>
  )
}

export default Home