const queryTextReducer = (queryText = "", action) => {
  if (action.type === "QUERY_TEXT_UPDATED") {
    return action.payload;
  }

  return queryText;
};

export default queryTextReducer;
