import { useEffect } from "react"
// Components
// import Grid from "../../components/Grid"
import Loading from "../../components/Loading"
import Accordion from "../../components/Accordion"
// Hook
import { useHomeFetch } from "../../hooks/useHomeFetch"
// Image
// import NoImage from "../../assets/images/placeholder-image.png"

const HomePage = () => {
  const { state, loading, error } = useHomeFetch()

  console.log("STATE: ", state)

  useEffect(() => {
    document.title = "Home"
  }, [])

  if (error) return <div>Something went wrong</div>

  return (
    <>
      <div className='page-container'>
      {loading && <Loading />}
        {state.results[0] && (
          <>
            <Accordion header={"Punk Beers Accordion"} items={state.results} />
          </>
        )}

        

        {/* <Grid header={"Punk Beers"}>
          {state.results.map((item) => (
            <Thumb
              key={item.id}
              clickable
              image={
                item.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
                  : NoImage
              }
              itemId={item.id}
            />
          ))}
        </Grid>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (
          <button onClick={() => setIsLoadingMore(true)}>Load more</button>
        )} */}
      </div>
    </>
  )
}

export default HomePage
