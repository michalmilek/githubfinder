import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { AiFillGithub } from 'react-icons/ai'
import { useContext } from 'react'
import { DarkContext } from '../App'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


const Navbar = () => {

  const {darkMode, setDarkMode, language, setLanguage, options} = useContext(DarkContext)


  const checkbox = () => {
    setDarkMode(prev => !prev)
  }


  return (
    <nav className={darkMode ? 'nav dark' : 'nav'}>
        <Link to="/" className="logo">
            <AiFillGithub />
            <h1>GITHUB Profile Finder</h1>
        </Link>


        <form className='form'>
      <select 
       value={language} 
       onChange={e => setLanguage(e.target.value)}>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </form>


      <label class="switch">
      <input checked={darkMode ? true : null} type="checkbox" onChange={() => checkbox()}/>
  <span class="slider round"></span>
</label>

    
        <ul>
            <li><NavLink className='link' to="/">{language === 'English' ? 'Home' : 'Strona główna'}</NavLink></li>
            <li><NavLink className='link' to="/about">{language === 'English' ? 'About' : 'O projekcie'}</NavLink></li>
        </ul>
        
    </nav>
  )
}

export default Navbar