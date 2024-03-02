import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className="container mt-5">
	<div className="row justify-content-center">
  <div>
		    <img src="/about.png" alt="" width="100%" strategy="lazyOnload" placeholder='empty'/>
		</div>
		<div>
		    <h1 className='text-success mt-5'>Welcome!</h1>
		    <h2>Know More About Us</h2>
		    <hr/>
		    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etae magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		    <Link className="btn btn-success" href='/contact'>Contact Us</Link>

		</div>
		
	</div>
</div>
  )
}

export default About