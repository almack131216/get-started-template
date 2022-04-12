import { useEffect } from "react"

const AboutPage = () => {
  useEffect(() => {
    document.title = "About"
  }, [])

  return (
    <div className='page-container'>
      <h1>About</h1>
      <hr />
      <h5>API</h5>
      <ul>
        <li>
          Will accept a search term (not available in current API) for future
          use.
        </li>
        <li>See [config.js, API.js] to customise</li>
        <li>
          In [config.js] see [ITEMS_PER_PAGE] to change # items per page/load
          more
        </li>
        <li>
          Using custom hook to fetch data...
          <ol>
            <li>On first load, data is fetched from API</li>
            <li>Retrieved data is saved to sessionStorage</li>
            <li>
              [Load More] button will fetch the next page and update
              sessionStorage
            </li>
            <li>
              When user reloads page, the data is loaded from sessionStorage to
              negate API call
            </li>
          </ol>
        </li>
      </ul>
      <hr />
      <h5>Accordion</h5>
      <ul>
        <li>
          Accepts [shift/alt+shift/space/return] to navigate and toggle each
        </li>
        <li>
          Currently limited to the first 5 results. Custom prop... remove it and
          the accordion will show the same results as the Grid
        </li>
        <li>
          [+/-] buttons using (my favourite) react-icons/fa (FontAwesome). I use
          this plugin because it only loads the ones I specify. I try to stick
          to one icon library, just in case we need to refactor later
        </li>
      </ul>
      <hr />
      <h5>Grid</h5>
      <ul>
        <li>Using [grid-template-columns]</li>
        <li>[Load More] button will add another # items</li>
      </ul>
      <hr />
      <h5>Style</h5>
      <ul>
        <li>Using node-sass to compile individual .scss files</li>
        <li>Files are in the same folder as associated .jsx file</li>
        <li>JSX & SCSS files both called index</li>

        <li>
          See [assets/sass] for general (root properties)
          <ul>
            <li>[_base.scss] root variables and basic classes</li>
            <li>[_mixins.scss] for shared styles (such as the bordered box of accordion/grid)</li>
            <li>[_typography.scss] Font size is easy to control
              <ol>
                <li>[html] font-size: 62.5%;</li>
                <li>[body] font-size: 1.6rem;</li>
                <li>
                  ..now, I can calculate font sizes easily (1.6rem = 16px,
                  2.4rem = 24px, etc)
                </li>
              </ol>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <strong>With more time...</strong>
      <ul>
        <li>Better UI – perhaps using Tailwind</li>
        <li>Sort functionality</li>
      </ul>
    </div>
  )
}

export default AboutPage
