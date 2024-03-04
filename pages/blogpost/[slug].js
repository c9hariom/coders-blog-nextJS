import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogPost.module.css'

const Slug = () => {
  const router = useRouter()

  const [blog, setBlog] = useState(null)

  const slug = router.query.slug

  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        const response = await fetch(
          'http://localhost:3000/api/getBlog?blog=' + slug
        )
        const data = await response.json()
        setBlog(data)
      }
    }
    fetchData()
  }, [slug])

  return (
    <div className={`container ${styles.main}`}>
      {blog && (
        <div>
          <div className={styles.center}>
            <h3>{blog.title}</h3>
          </div>
          <hr />
          <p>{blog.content}</p>
        </div>
      )}
    </div>
  )
}

export default Slug
