import AccordionItem from "./AccordionItem"

const Accordion = ({ header, items }) => {
  return (
    <>
      {header ? <h1>{header}</h1> : ""}

      <div className='accordion-container'>
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.name}
            image_url={item.image_url}
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
