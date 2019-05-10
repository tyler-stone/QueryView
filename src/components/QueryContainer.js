import React from "react";
import { connect } from "react-redux";
import AceEditor from "react-ace";
import QueryResult from "./QueryResult";
import { runQuery, queryTextUpdate } from "../actions";

import "brace/mode/sql";
import "brace/ext/language_tools";
import "brace/theme/github";

class QueryContainer extends React.Component {
  render() {
    let editorStyles = {
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "4px"
    };

    let tableResult = (
      <div>
        <h4>Run query...</h4>
      </div>
    );

    if (this.props.queryResults) {
      tableResult = <QueryResult />;
    }

    return (
      <div className="queryResults ui segment">
        <AceEditor
          height=""
          mode="sql"
          theme="github"
          value={this.props.queryText}
          minLines={5}
          maxLines={50}
          width="100%"
          onChange={this.props.onQueryTextUpdate}
          editorProps={{ $blockScrolling: true }}
          style={editorStyles}
        />
        <button
          onClick={this.props.onQueryRunClick}
          className="ui primary button"
        >
          Run Query
        </button>
        {tableResult}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onQueryRunClick: () => {
      dispatch(runQuery());
    },
    onQueryTextUpdate: queryText => {
      dispatch(queryTextUpdate(queryText));
    }
  };
};

const mapStateToProps = state => {
  return { queryResults: state.queryResults, queryText: state.queryText };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryContainer);
