export const runQuery = id => {
  const response = {
    headers: ["Name", "Age", "Job"],
    rows: [
      ["James", 24, "Engineer"],
      ["Jill", 89, "Engineer"],
      ["Elyse", 76, "Designer"]
    ]
  };

  return {
    type: "QUERY_RESPONSE_RECEIVED",
    id,
    payload: response
  };
};

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
