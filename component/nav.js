import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  return (
    <div className='navbar-main'>
      <div className='d-flex justify-content-center align-items-center'>
        <nav className='navbar navbar-expand-lg'>
          <div className='container-fluid'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    router.pathname === '/' || router.pathname === ''
                      ? 'active'
                      : ''
                  }`}
                  aria-current='page'
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    router.pathname === '/about' ? 'active' : ''
                  }`}
                  href='/about'
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    router.pathname === '/blog' ? 'active' : ''
                  }`}
                  href='/blog'
                >
                  Blog
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    router.pathname === '/contact' ? 'active' : ''
                  }`}
                  href='/contact'
                >
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
