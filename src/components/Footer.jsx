import React from 'react'
import './Footer.scss'
import { useContext } from 'react'
import { DarkContext } from '../App'

const Footer = () => {

  const {darkMode, language} = useContext(DarkContext)

  return (
    <footer className={darkMode ? 'footer dark' : 'footer'}>
        <h1>
            2022 Michał Miłek <br/> {language === 'English' ? 'ALL RIGHTS RESERVED.' : 'WSZYSTKIE PRAWA ZASTRZEŻONE'}
            </h1>
    </footer>
  )
}

export default Footer