import React, { useEffect, setState, useState } from "react"
// import { FaPlus, FaMinus } from 'react-icons/fa'

const AccordionItem = ({ title, image_url, children, isExpanded }) => {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    console.log("allExpanded: ", isExpanded)
    setExpanded(isExpanded)
  }, [isExpanded])

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <article className='question'>
      <header onClick={() => toggleExpanded()}>
        <div className='image-container'>
          <img src={image_url} alt={title} />
        </div>
        <h4 className='question-title'>{title}</h4>
        <button className='btn'>{expanded ? "-" : "+"}</button>
      </header>
      {expanded && <div className='answer'>{children}</div>}
    </article>
  )
}

export default AccordionItem
