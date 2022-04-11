import Card from "../Card"

const Grid = ({ header, items }) => {
  return (
    <>
      {header ? <h1>{header}</h1> : ""}
      <div className='grid-container'>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default Grid
