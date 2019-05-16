import axios from "axios";

export const updateQueryText = (id, queryText) => {
  return {
    type: "QUERY_TEXT_UPDATED",
    id,
    payload: queryText
  };
};

export const createQueryView = () => {
  return {
    type: "QUERY_CREATE_NEW"
  };
};

export const requestQueryResult = id => {
  return {
    type: "QUERY_RESPONSE_REQUESTED",
    id
  };
};

export const receiveQueryResult = (id, response) => {
  return {
    type: "QUERY_RESPONSE_RECEIVED",
    id,
    payload: response
  };
};

export function fetchQueyResult(id, query) {
  return function(dispatch) {
    dispatch(requestQueryResult(id));
    return axios
      .post("http://localhost:3001/api/query", {
        query
      })
      .then(response => dispatch(receiveQueryResult(id, response.data.result)))
      .catch(error => {
        console.log(error);
        dispatch(receiveQueryResult(id, null));
      });
  };
}
