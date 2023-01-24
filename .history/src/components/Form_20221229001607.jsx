import React from 'react'
import { useState } from 'react'
import './Form.scss'
import { DarkContext } from '../App'
import { useContext } from 'react'
import axios from 'axios'
import UserList from './UserList'


const githubToken = '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'

const Form = () => {
const [input, setInput] = useState('')
const [data, setData] = useState([])
const {darkMode, language} = useContext(DarkContext)

const getData = async () => {
  
    

  try{
    const response = await axios.get(
      `https://api.github.com/search/users?q=${input}`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`
        }
      }
      );

      setData(response?.data?.items)
    } catch(e) {
      console.log(e)
    }

};

const submitHandler = (e) => {
  e.preventDefault();
  getData();
}


  return (
    <main className={darkMode ? 'maincontent dark' : 'maincontent'}>

    <form className='form' onSubmit={submitHandler}>
      <label>{language === 'English' ? 'Search: ' : 'Szukaj: '}</label>
      <input type="text" placeholder={language === 'English' ? 'nickname' : 'nazwa użytkownika'} value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit">{language === 'English' ? 'Search users' : 'Wyszukaj użytkowników'}</button>

    </form>

    <div className="searchresult">
      
      {data.map((user, index) => (
        <UserList key={index} user={user} />
      ))}
    </div>    
      
    </main>
  )
}

export default Form