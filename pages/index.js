import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  function createMarkup () {
    return {
      __html:
        "<center><h4>&lt;/codersblog&gt;</h4></center>"
    }
  }

  return (
    <div>
      <div className="mt-5" dangerouslySetInnerHTML={createMarkup()} />
      <p className='m-5'>This is the home page of the coders blog</p>
    </div>
  )
}
