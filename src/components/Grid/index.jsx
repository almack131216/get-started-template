import Card from "../Card"

const Grid = ({ header, items }) => {
  return (
    <>
      {header ? <h1>{header}</h1> : null}
      {items ? (
        <div className='grid-container'>
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : null}
    </>
  )
}

export default Grid
