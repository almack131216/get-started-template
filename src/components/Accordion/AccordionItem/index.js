import React, { useEffect, useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

const AccordionItem = ({ title, image_url, children, isExpanded }) => {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    //2do (buggy when one is open and want to close all)
    console.log("allExpanded: ", isExpanded)
    isExpanded === "open" && setExpanded(true)
    isExpanded === "close" && setExpanded(false)
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
        <button className='btn'>{expanded ? <FaMinus /> : <FaPlus />}</button>
      </header>
      {expanded && <div className='answer'>{children}</div>}
    </article>
  )
}

export default AccordionItem
