import React from "react";
import { connect } from "react-redux";
import QueryContainer from "./QueryContainer";
import { createQueryView } from "../actions";

import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="app ui container">
        <header className="appHeader">
          <h1 className="ui header">QueryView</h1>
        </header>
        {this.props.containers.map(id => {
          return <QueryContainer key={id} id={id} />;
        })}
        <button
          className="ui button"
          onClick={this.props.onQueryViewCreateClick}
        >
          New Query
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onQueryViewCreateClick: () => {
      dispatch(createQueryView());
    }
  };
};

const mapStateToProps = state => {
  return {
    containers: Object.keys(state.queryViews)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
