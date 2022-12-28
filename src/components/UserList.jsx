import React from 'react'
import './UserList.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DarkContext } from '../App'

const UserList = ( {user} ) => {

  const {darkMode} = useContext(DarkContext)

  return (
    <Link className={darkMode ? 'userlink dark' : 'userlink'} to={`/${user.login}`}>
    <div className='user'>
        <img src={user.avatar_url} alt="" />
        <h1>{user.login}</h1>
    </div>
    </Link>
  )
}

export default UserList