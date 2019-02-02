export const SEARCH_QUERY = 'SEARCH_QUERY';

export function searchFlight(value) {
  return {
    type: SEARCH_QUERY, 
    value
  };
}

