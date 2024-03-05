import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  function createMarkup () {
    return {
      __html:
        "<center><h3>Coders-Nexus : A one stop solution for a coder's need</h3></center>"
    }
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}
