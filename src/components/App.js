import React from "react";
import QueryContainer from "./QueryContainer";

import "./App.css";

const App = () => {
  return (
    <div className="app ui container">
      <header className="appHeader">
        <h1 className="ui header">QueryView</h1>
      </header>
      <QueryContainer />
    </div>
  );
};

export default App;
