import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './UserItem.scss'
import {SlUserFollowing} from 'react-icons/sl'
import {RiUserFollowFill} from 'react-icons/ri'
import {MdOutlinePublic} from 'react-icons/md'
import {AiOutlineFork, AiOutlineIssuesClose} from 'react-icons/ai'
import {IoMdGlasses} from 'react-icons/io'
import { useContext } from 'react'
import { DarkContext } from '../App'


const UserItem = ({user}) => {
   const [item, setItem] = useState({})
   const [repos, setRepos] = useState([])
   const {darkMode, language} = useContext(DarkContext)

  const getData = async () => {
    try{
      const response = await axios.get(`https://api.github.com/users/${user}`,{
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`
        }
      });

      setItem(response?.data)
    } catch(e) {console.log(e)}
  }
  
  
  const getRepos = async () => {
    try{
      const response = await axios.get(`https://api.github.com/users/${user}/repos?sort=updated&direction=desc&per_page=5`,{
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}` 
        }
        
      }
      );
      setRepos(response?.data)
    } catch(e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    getData()
    getRepos()
  }, [])


  const {login, name, location, html_url, hireable, avatar_url, followers, following, public_repos} = item

  return (
    <div className={darkMode ? 'useritem dark' : 'useritem'}>
      <img src={avatar_url} alt="" />
      <h1>{login}</h1>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <a className='visit' href={html_url}>{language === 'English' ? 'Visit Github' : 'Odwiedź github'}</a>
      {hireable ? <span className='hireable'>{language === 'English' ? 'Hireable' : 'Do zatrudnienia'}</span> : <span className='nonhireable'>{language === 'English' ? 'Nonhireable' : 'Nie do zatrudnienia'}</span>}
      <div className="numbers">
        <div className="followers">
          
          <p>{language === 'English' ? 'Followers' : 'Obserwujący'}
          <SlUserFollowing/>
            
          </p>
        <h4>{followers}</h4>
        </div>
        
        <div className="followers">
          <p>{language === 'English' ? 'Following' : 'Obserwowani'}
          <RiUserFollowFill />

          </p>
        <h4>{following}</h4>
        </div>

        <div className="followers">
          <p>{language === 'English' ? 'Public Repos' : 'Publiczne repozytoria'} <MdOutlinePublic /></p>
        <h4>{public_repos}</h4>
      </div>
      </div>

      <div className="repos">
        {repos.slice(0,5).map((repo, index) => (
          <div key={index} className="repo">
            <a className='repoTitle' href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
            <div className="repoNumbers">
              <div className="repoNumber">
              <p>{language === 'English' ? 'Forks' : 'Użytkownicy pracujący przy projekcie'} <AiOutlineFork /></p>
              <span>{repo.forks}</span>
              </div>

              <div className="repoNumber">
              <p>{language === 'English' ? 'Open issues' : 'Otwarte problemy'} <AiOutlineIssuesClose /></p>
              <span>{repo.open_issues}</span>
              </div>

              <div className="repoNumber">
              <p>{language === 'English' ? 'Watchers' : 'Oglądający'} <IoMdGlasses /></p>
              <span>{repo.watchers}</span>
              </div>



            </div>

          </div>
        ))}
      </div>


      </div>
  )
}

export default UserItem