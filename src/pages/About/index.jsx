import { useEffect } from "react"

const AboutPage = () => {
  useEffect(() => {
    document.title = "About"
  }, [])

  return <div className='page-container'>AboutPage</div>
}

export default AboutPage
