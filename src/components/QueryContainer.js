import React from "react";
import { connect } from "react-redux";
import AceEditor from "react-ace";
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  VerticalBarSeries
} from "react-vis";
import QueryResultTable from "./QueryResultTable";
import { runQuery, updateQueryText } from "../actions";

import "brace/mode/sql";
import "brace/ext/language_tools";
import "brace/theme/github";

import "react-vis/dist/style.css";

const VIEW_MODE_TABLE = "table";
const VIEW_MODE_VISUAL = "visual";

function ViewToggleButton(props) {
  const showButton = props.showButton;
  const viewMode = props.viewMode;
  const onClick = props.onClick;

  if (showButton) {
    return (
      <button className="ui button" onClick={onClick}>
        {viewMode === VIEW_MODE_TABLE ? "Visualize" : "View Table"}
      </button>
    );
  }
  return null;
}

class QueryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: VIEW_MODE_TABLE
    };
  }

  toggleViewMode() {
    this.setState({
      viewMode:
        this.state.viewMode === VIEW_MODE_TABLE
          ? VIEW_MODE_VISUAL
          : VIEW_MODE_TABLE
    });
  }

  render() {
    let editorStyles = {
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "4px"
    };

    let resultsDisplay = (
      <div>
        <h4>Run query...</h4>
      </div>
    );

    if (this.props.queryResults) {
      if (this.state.viewMode === VIEW_MODE_TABLE) {
        resultsDisplay = <QueryResultTable results={this.props.queryResults} />;
      } else {
        resultsDisplay = (
          <FlexibleWidthXYPlot height={600} xType="ordinal">
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <ChartLabel
              text={this.props.queryResults.headers[0]}
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.0}
              yPercent={1.07}
            />

            <ChartLabel
              text={this.props.queryResults.headers[1]}
              className="alt-y-label"
              includeMargin={true}
              xPercent={0.05}
              yPercent={0}
              style={{
                transform: "rotate(-90)",
                textAnchor: "end"
              }}
            />
            <VerticalBarSeries
              className="first-series"
              data={this.props.queryResults.rows.map(row => {
                return {
                  x: row[0],
                  y: row[1]
                };
              })}
            />
          </FlexibleWidthXYPlot>
        );
      }
    }

    return (
      <div className="queryResults ui segment">
        <AceEditor
          height=""
          mode="sql"
          theme="github"
          value={this.props.query}
          minLines={5}
          maxLines={25}
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
        <ViewToggleButton
          showButton={this.props.queryResults !== null}
          viewMode={this.state.viewMode}
          onClick={this.toggleViewMode.bind(this)}
        />
        <div className="resultsDisplay">{resultsDisplay}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onQueryRunClick: () => {
      dispatch(runQuery(ownProps.id));
    },
    onQueryTextUpdate: queryText => {
      dispatch(updateQueryText(ownProps.id, queryText));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.queryViews[ownProps.id]);
  return { ...state.queryViews[ownProps.id] };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryContainer);
