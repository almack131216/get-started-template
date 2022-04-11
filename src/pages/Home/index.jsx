import { useEffect } from "react"

const HomePage = () => {
  useEffect(() => {
    document.title = "Home"
  }, [])

  return <div className='page-container'>HomePage</div>
}

export default HomePage
