import React, { useState } from "react"
// import { FaPlus, FaMinus } from 'react-icons/fa'

const AccordionItem = ({ title, image_url, children }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header onClick={() => setExpanded(!expanded)}>
        <div className='image-container'>
          <img src={image_url} alt={title} />
        </div>
        <h4 className='question-title'>
          {title}
        </h4>
        <button className='btn'>
          {expanded ? "-" : "+"}
        </button>
      </header>
      {expanded && <div className='answer'>{children}</div>}
    </article>
  )
}

export default AccordionItem
