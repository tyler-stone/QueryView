const queryResultsReducer = (queryResults = null, action) => {
  if (action.type === "QUERY_RESULTS") {
    return action.payload;
  }

  return queryResults;
};

export default queryResultsReducer;
