import { useEffect } from "react"
// Components
import Grid from "../../components/Grid"
import Loading from "../../components/Loading"
import Accordion from "../../components/Accordion"
// Hook
import { useHomeFetch } from "../../hooks/useHomeFetch"

const HomePage = () => {
  const {
    state,
    loading,
    error,
    setIsLoadingMore
  } = useHomeFetch();

  useEffect(() => {
    document.title = "Home"
  }, [])

  if (error) return <div>Something went wrong</div>

  return (
    <>
      <div className='page-container'>
      
        {state.results[0] && (
          <>
            <Accordion header={"Accordion"} items={state.results} limit={5}/>
            <Grid header={"Grid"} items={state.results} />
          </>
        )}

        {loading && <Loading />}
       
        {state.page < 10 && !loading && (
          <button onClick={() => setIsLoadingMore(true)}>Load more</button>
        )}
      </div>
    </>
  )
}

export default HomePage
