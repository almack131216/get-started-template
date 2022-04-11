import { useEffect } from "react"

const Styles = () => {
  useEffect(() => {
    document.title = "Styles"
  }, [])

  return (
    <div className='page-container'>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <strong>strong</strong>
      <p>
        Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam luctus mi at nisl auctor, ut lacinia nulla tempus. Donec id
        tellus enim. In nisi est, vehicula at dolor quis, tempor tincidunt
        dolor. Pellentesque bibendum ante dui, eu viverra augue aliquet eget.
        Morbi scelerisque maximus mollis. Suspendisse pellentesque est porta
        sapien fringilla, sed fermentum turpis fermentum. Suspendisse potenti.
        Nulla pretium ullamcorper velit quis tempor. Curabitur efficitur
        vestibulum hendrerit. Nunc eget gravida massa.
      </p>
      <p>
        Paragraph 2: Maecenas mattis eros sapien, <a href='/'>vel porttitor</a>{" "}
        diam venenatis ac. Suspendisse aliquam enim ut nulla pellentesque
        faucibus id eget lectus. Phasellus nulla mi, maximus ac tortor ornare,
        ultrices tristique tortor. Donec blandit nisi ut blandit egestas. Nunc
        mattis dapibus nunc vitae tempor. Cras tellus augue, fermentum eu nisl
        quis, tempor maximus quam.
      </p>
      <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
          <li>Unordered list item 4</li>
          <li>Unordered list item 5</li>
      </ul>
      <strong>Color Vars</strong>
      <div className='color-swatches'>
        <div className='swatch'>
          <div className='bg-color-heading'></div>--color-heading
        </div>
        <div className='swatch'>
          <div className='bg-color-text'></div>--color-text
        </div>
        <div className='swatch'>
          <div className='bg-color-primary'></div>--color-primary
        </div>
        <div className='swatch'>
          <div className='bg-color-secondary'></div>--color-secondary
        </div>
      </div>
    </div>
  )
}

export default Styles
