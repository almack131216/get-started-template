import { useState, useEffect, useRef } from "react"
// API
import API from "../API"
// Helpers
import { isPersistedState } from "../helpers"

const initialState = {
  page: 0,
  results: [],
}

export const useHomeFetch = () => {
  const isMounted = useRef(true)
  const sessionState = isPersistedState("pageHomeState")
  const initialStateStored =
    sessionState && sessionState.results.length ? sessionState : initialState

  const showCLG = false
  const [searchTerm, setSearchTerm] = useState("")
  const [state, setState] = useState(initialStateStored)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const fetchItems = async (page, searchTerm = "") => {
    try {
      setError(false)
      setLoading(true)

      const items = await API.fetchItems(searchTerm, page)
      showCLG &&
        console.log("[H]---fetchItems() page: ", page, ", items: ", items)

      const newArr = {
        page: page,
        results: [...items],
      }

      setState((prev) => ({
        ...newArr,
        page,
        results:
          page > 1 ? [...prev.results, ...newArr.results] : [...newArr.results],
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  // Initial and search
  useEffect(() => {
    if (!searchTerm) {
      // const sessionState = isPersistedState("pageHomeState") // move to top to avoid reload initialState bug
      showCLG && console.log("[H]---useEffect()---TRYING...", sessionState)
      if (sessionState && sessionState.results.length) {
        showCLG &&
          console.log(
            "[H]---useEffect()---Grabbing from sessionStorage...",
            sessionState.results
          )
        setState(sessionState)
        return
      }
    }

    if (isMounted) {
      showCLG && console.log("[H]---useEffect()---Grabbing from API")
      setState(initialState)
      fetchItems(1, searchTerm)
    }

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, showCLG])

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return
    showCLG && console.log("[H]---useEffect()---Load More...")
    fetchItems(state.page + 1, searchTerm)
    setIsLoadingMore(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingMore, searchTerm, state.page, showCLG])

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm)
      sessionStorage.setItem("pageHomeState", JSON.stringify(state))
  }, [searchTerm, state])

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }
}
