import React from 'react'
import { Link } from 'react-router-dom'
import '.././App.css'
const Home = () => {
  return (
    <div className='container_body'>
           <div className='box_link_connect'>
           <Link to="/login" className='link_connect'>Form Login</Link>
           <Link to="/todolist" className='link_connect'>ToDo List</Link>
           <Link to="/tab" className='link_connect'>Split Tab</Link>
           <Link to="/change" className='link_connect'>Change Images</Link>
           <Link to="/dragdrop" className='link_connect'>Drag And Drop</Link>
           <Link to="/qrcode" className='link_connect'>Create QR Code</Link>
           <Link to="/more" className='link_connect'>View and hide</Link>
           <Link to="/select" className='link_connect'>Select Product</Link>
           <Link to="/calculation" className='link_connect'>Calculation</Link>
           </div>
    </div>
  )
}

export default Home
