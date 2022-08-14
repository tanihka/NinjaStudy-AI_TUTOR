import React from 'react'
import { NavLink } from 'react-router-dom'

function navbar() {
  return (
    <>
    <nav  className="container mx-auto flex items-center justify-between ">
    <NavLink to="/">
                <img style={{height:100 , borderRadius:8}} src="/images/logos.png" alt="logo" />
            </NavLink>
            <ul  className='flex items-center font-semibold	'>
            <li><NavLink to="/">Home</NavLink></li>
              <li className='ml-6'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
    </nav>
       {/* <img style={{height:80 , borderRadius:8}} src="/images/logos.png" alt="logo" />
       
       <li><NavLink to="/">Home</NavLink></li>
              <li className='ml-6'><NavLink to="/products">Products</NavLink></li> */}
    </>
  )
}

export default navbar
