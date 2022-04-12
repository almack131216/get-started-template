// ----- helpers -----

// ----- isPersistedState -----
export const isPersistedState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName)
  // console.log('[HELPER]---isPersistedState: ',sessionState);
  return sessionState && JSON.parse(sessionState)
}
