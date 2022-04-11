import { useEffect } from "react"

const AboutPage = () => {
  useEffect(() => {
    document.title = "About"
  }, [])

  return (
    <div className='page-container'>
      <h1>About</h1>
      <strong>With more time...</strong>
      <ul>
        <li>Bugfix for saving to/loading from sessionStorage</li>
        <li>Better UI – perhaps using Tailwind</li>
        <li>Sort functionality</li>
        <li>Better comments</li>
      </ul>
    </div>
  )
}

export default AboutPage
