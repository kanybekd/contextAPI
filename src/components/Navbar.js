import React from 'react'
import { Link } from 'react-router-dom'
// import About from "../pages/About.jsx"
export default function Navbar() {
  return (
      <div className="navigation">
        <div >
          <Link to='/'>
          <span style={{color:"white",fontSize:"2rem"}}>Logo goes here</span>
          </Link>
        </div>
        <div className="right-nav">
          <div>
            <Link to='/'>
              <span style={{color:"white",fontSize:"2rem"}}>Home</span>
            </Link>
          </div>
          <div >
            <Link to='/about'>
            <span style={{color:"white",fontSize:"2rem"}}>About</span>
            </Link>
          </div>
      </div>
    </div>
  )
}