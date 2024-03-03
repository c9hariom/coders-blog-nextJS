import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'

const Blog = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/blogs/')
      const data = await response.json()
      setBlogs(data)
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      <div className={` ${styles.center}`}>
        <h3>Latest Blog from c9coders</h3>
      </div>
      <div className='row'>
        {blogs &&
          blogs.map((data, index) => {
            return (
              <div className='col-md-6 col-sm-12 col-12 ' key={index}>
                <div className='serv-section-2'>
                  <div className='serv-section-2-icon'>
                    {' '}
                    <i className='fas fa-gem'></i>{' '}
                  </div>
                  <div className='serv-section-desc'>
                    <h4>
                      <Link href={`/blogpost/${data.slug}`}>{data.title}</Link>
                    </h4>
                    <h5>{data.content.slice(0, 120) + '...'}</h5>{' '}
                  </div>
                  <div className='section-heading-line-left'></div>
                </div>
              </div>
            )
          })}
      </div>
      <style jsx>{`
        // .section-block-grey {
        //     padding: 90px 0px 90px 0px;
        //     background-color: #f9f9f9;
        // }

        .serv-section-2 {
          position: relative;
          border: 1px solid #eee;
          background: #fff;
          box-shadow: 0px 10px 30px 0px rgba(50, 50, 50, 0.16);
          border-radius: 5px;
          overflow: hidden;
          padding: 30px;
          margin: 15px 0px 15px 0px;
        }

        .serv-section-2:before {
          position: absolute;
          top: 0;
          right: 0px;
          z-index: 0;
          content: ' ';
          width: 120px;
          height: 120px;
          background: #f5f5f5;
          border-bottom-left-radius: 136px;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
        }

        .serv-section-2-icon i {
          color: #5f27cd;
          font-size: 48px;
          line-height: 65px;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
        }

        .serv-section-desc {
          position: relative;
        }

        .serv-section-2 h4 {
          color: #333;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.5;
        }

        .serv-section-2 h5 {
          color: #333;
          font-size: 17px;
          font-weight: 400;
          line-height: 1;
          margin-top: 5px;
        }

        .section-heading-line-left {
          content: '';
          display: block;
          width: 95%;
          height: 3px;
          background: #5f27cd;
          border-radius: 25%;
          margin-top: 15px;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  )
}

export default Blog
