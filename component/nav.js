import React from 'react'
import Link from 'next/link'


const Nav = () => {
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' href="/">
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='/about'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='/blog'>
                  Blog
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Nav
