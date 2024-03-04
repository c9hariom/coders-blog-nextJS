import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogPost.module.css'

const Slug = props => {
  const router = useRouter()

  const blog = props.data
  let para = []

  // const slug = router.query.slug

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (slug) {
  //       const response = await fetch(
  //         'http://localhost:3000/api/getBlog?blog=' + slug
  //       )
  //       const data = await response.json()
  //       setBlog(data)
  //     }
  //   }
  //   fetchData()
  // }, [slug])

  return (
    <div className={`container ${styles.main}`}>
      {blog && (
        <div>
          <div className={styles.center}>
            <h3>{blog.title}</h3>
          </div>
          <hr />
          {(() => {
            para = blog.content.split('\n\n')
          })()}
          {para.map((data, index) => {
            return <p key={index}>{data}</p>
          })}
        </div>
      )}
    </div>
  )
}

export default Slug

export async function getServerSideProps (context) {
  if (context.query.slug) {
    const response = await fetch(
      'http://localhost:3000/api/getBlog?blog=' + context.query.slug
    )
    const data = await response.json()
    return { props: { data } }
  }
}
