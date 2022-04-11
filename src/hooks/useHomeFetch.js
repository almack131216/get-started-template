import { useState, useEffect } from "react"
// API
import API from "../API"
// Helpers
import { isPersistedState } from "../helpers"

const initialState = {
  page: 0,
  results: [],
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // console.log(searchTerm);

  const fetchItems = async (page, searchTerm = "") => {
    try {
      setError(false)
      setLoading(true)

      const items = await API.fetchItems(searchTerm, page)
      console.log(items)

      //2do (problem with setting state to sessionStorage...)
      setState((prev) => ({
        page: page,
        results: [...items],
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  // Initial and search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState")

      if (sessionState) {
        console.log("Grabbing from sessionStorage")
        console.log(sessionState)
        // setState(sessionState);//2do
        // return;
      }
    }

    console.log("Grabbing from API")
    setState(initialState)
    fetchItems(1, searchTerm)
  }, [searchTerm])

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return

    fetchItems(state.page + 1, searchTerm)
    setIsLoadingMore(false)
  }, [isLoadingMore, searchTerm, state.page])

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state))
  }, [searchTerm, state])

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }
}
