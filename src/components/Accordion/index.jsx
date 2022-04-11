import { useState } from "react"
import AccordionItem from "./AccordionItem"

const Accordion = ({ header, items }) => {
  const [allExpanded, setAllExpanded] = useState('')

  const handleOpenAll = () => {
    console.log('OPEN ALL');
    setAllExpanded('open')
  }

  const handleCloseAll = () => {
    console.log('CLOSE ALL');
    setAllExpanded('close')
  }

  return (
    <>
      {header ? <h1>{header}</h1> : ""}

      <p>status: {allExpanded}</p>
      <button onClick={() => handleOpenAll()}>open all</button>
      <button onClick={() => handleCloseAll()}>close all</button>
      
      <div className='accordion-container'>
        {items.slice(0,5).map((item) => (
          <AccordionItem
            key={item.id}
            title={item.name}
            image_url={item.image_url}
            isExpanded={allExpanded}
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
