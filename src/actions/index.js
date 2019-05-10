export const runQuery = () => {
  const response = {
    headers: ["Name", "Age", "Job"],
    rows: [
      ["James", 24, "Engineer"],
      ["Jill", 26, "Engineer"],
      ["Elyse", 24, "Designer"]
    ]
  };

  return {
    type: "QUERY_RESULTS",
    payload: response
  };
};

export const queryTextUpdate = queryText => {
  return {
    type: "QUERY_TEXT_UPDATED",
    payload: queryText
  };
};
