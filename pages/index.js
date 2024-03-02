import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
