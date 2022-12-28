import React from 'react'
import Footer from '../components/Footer'
import Information from '../components/Information'
import Navbar from '../components/Navbar'
import './About.scss'

const About = () => {
  return (
    <div className='about'>
        <Navbar />
        <Information />
        <Footer />
    </div>
  )
}

export default About