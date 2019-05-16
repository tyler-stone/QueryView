const generateQueryViewInstanceState = id => {
  return {
    id,
    isFetching: false,
    queryResults: null,
    query: ""
  };
};

const initialState = {
  default: generateQueryViewInstanceState("default")
};

const queryViewsReducer = (queryViews = initialState, action) => {
  switch (action.type) {
    case "QUERY_CREATE_NEW":
      let initialQvId = "queryview_" + Math.floor(Math.random() * 10000);
      return {
        ...queryViews,
        [initialQvId]: generateQueryViewInstanceState(initialQvId)
      };
    case "QUERY_RESPONSE_REQUESTED":
      return {
        ...queryViews,
        [action.id]: {
          ...queryViews[action.id],
          isFetching: true
        }
      };
    case "QUERY_RESPONSE_RECEIVED":
      return {
        ...queryViews,
        [action.id]: {
          ...queryViews[action.id],
          queryResults: action.payload,
          isFetching: false
        }
      };
    case "QUERY_TEXT_UPDATED":
      return {
        ...queryViews,
        [action.id]: {
          ...queryViews[action.id],
          query: action.payload
        }
      };
    default:
      return queryViews;
  }
};

export default queryViewsReducer;
