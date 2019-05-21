var connections = {};

const listConnections = () => connections;

const registerConnection = (connection, queryCallback) => {
  connections[connection] = queryCallback;
};

const executeQuery = (connection, query) => {
  return connections[connection](query);
};

module.exports = {
  listConnections,
  registerConnection,
  executeQuery
};
