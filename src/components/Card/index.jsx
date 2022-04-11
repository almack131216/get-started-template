// Image
import NoImage from "../../assets/images/placeholder-image.png"

const Card = ({ item }) => {
  const { name, image_url, tagline } = item

  return (
    <div className='card'>
      <div className='image-container'>
        <img src={image_url ? image_url : NoImage} alt={name} />
      </div>
      <div className='text-container'>
        <strong>{name}</strong>
        {/* <p>{tagline}</p> */}
      </div>
      <div className='button-container'>
        <button className='btn cta'>More</button>
      </div>
    </div>
  )
}

export default Card
