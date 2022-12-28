import React from 'react'
import {AiFillGithub, AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai'
import './Information.scss'
import { DarkContext } from '../App'
import { useContext } from 'react'


const Information = () => {
    const {darkMode, language} = useContext(DarkContext);


  return (
    <article className={darkMode ? 'article dark' : 'article'}>
        <h1>Github Profile Finder</h1>
        <p>{language === 'English' ? 'Hello, I made this application to practice react.' : 'Dzień dobry, wykonałem tą prostą aplikację, aby ćwiczyć moję umiejętności w Reactcie.'}</p>
        <h2>{language === 'English' ? 'Libraries and hooks used to create this application: ' : 'Biblioteki i hooki użyte do stworzenia tej aplikacji: '}</h2>
      <ul className='list'>
        <li>React Router DOM</li>
        <li>ContextAPI</li>
        <li>Axios</li>
        <li>Sass</li>
        <li>Github API</li>
      </ul>
        <h2>{language === 'English' ? 'Contact me:' : 'Skontaktuj się ze mną:'}</h2>
        <ul>
            <li><a href="https://github.com/michalmilek"><AiFillGithub className='git' /></a></li>
            <li><a href="https://www.instagram.com/michalmilekk/"><AiOutlineInstagram className='insta' /></a></li>
            <li><a href="https://www.facebook.com/michal.m1337/"><AiFillFacebook className='fb' /></a></li>
        </ul>
    </article>
  )
}

export default Information