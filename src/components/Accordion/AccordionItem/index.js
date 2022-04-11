import React, { useEffect, useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

const AccordionItem = ({
  title,
  image_url,
  children,
  isExpanded,
  toggleParent,
}) => {
  const [expanded, setExpanded] = useState(false)

  // IF parent open/close ALL changes...
  useEffect(() => {
    console.log("[AccordionItem] useEffect() | isExpanded: ", isExpanded)
    isExpanded && setExpanded(true)
    isExpanded === false && setExpanded(false)
  }, [isExpanded])

  // toggle THIS accordion item
  const toggleExpanded = () => {
    console.log("[AccordionItem] toggleExpanded()... toggleParent()")
    setExpanded(!expanded)
    toggleParent()
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
