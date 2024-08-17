import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container_body'>
           <div className='box_link_connect'>
           <Link to="/login" className='link_connect'>Form Login</Link>
           <Link to="/todolist" className='link_connect'>ToDo List</Link>
           </div>
    </div>
  )
}

export default Home
