import { useEffect, useState } from "react"
import AccordionItem from "./AccordionItem"

const Accordion = ({ header, items, limit }) => {
  const [allExpanded, setAllExpanded] = useState(false)
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (items) {
      setRows([...items])
    }
    if (limit) {
      // console.log("[C]---[Accordion] useEffect() | limit ", limit)
      const newRows = [...items].slice(0, limit)
      setRows(newRows)
    }
  }, [items, limit])

  // open/close ALL
  const toggleOpenCloseAll = (getState) => {
    // console.log("[C]---[Accordion] toggleOpenCloseAll()", getState)
    setAllExpanded(getState)
  }

  // triggered from child 
  const handleToggleParent = () => {
    // console.log("[C]---[Accordion] handleToggleParent(), null")
    setAllExpanded(null)
  }

  return (
    <>
      {header ? <h1>{header}</h1> : null}
      <p>
        status: {allExpanded === true && "open"}
        {allExpanded === false && "close"}
        {allExpanded === null && "---"}
      </p>
      <button onClick={() => toggleOpenCloseAll(true)}>open all</button>
      <button onClick={() => toggleOpenCloseAll(false)}>close all</button>

      <div className='accordion-container'>
        {rows &&
          rows.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.name}
              image_url={item.image_url}
              isExpanded={allExpanded}
              toggleParent={handleToggleParent}
            >
              {item.tagline && (
                <blockquote className='blockquote'>
                  <h3>{item.tagline}</h3>
                </blockquote>
              )}
              {item.first_brewed && <h5>First Brewed: {item.first_brewed}</h5>}
              {item.description && (
                <div className='description'>{item.description}</div>
              )}
            </AccordionItem>
          ))}
      </div>
    </>
  )
}

export default Accordion
