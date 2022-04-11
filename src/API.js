import {
    API_URL,
    ITEMS_PER_PAGE
  } from './config';
  
  
  const apiSettings = {
    fetchItems: async (searchTerm, page) => {
      const endpoint = searchTerm
        ? `${API_URL}${searchTerm}&page=${page}`
        : `${API_URL}?page=${page}&per_page=${ITEMS_PER_PAGE}`;
      return await (await fetch(endpoint)).json();
    },
    fetchItem: async itemId => {
      const endpoint = `${API_URL}/${itemId}`;
      return await (await fetch(endpoint)).json();
    },

  };
  
  export default apiSettings;
  