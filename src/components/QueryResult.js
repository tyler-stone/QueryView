import React from "react";
import { connect } from "react-redux";

class QueryResult extends React.Component {
  renderTableHeaders() {
    return this.props.queryResults.headers.map(header => {
      return <th key={header}>{header}</th>;
    });
  }

  renderTableRows() {
    return this.props.queryResults.rows.map(row => {
      return (
        <tr key={row}>
          {row.map(cell => {
            return <td key={cell}>{cell}</td>;
          })}
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>{this.renderTableHeaders()}</tr>
        </thead>
        <tbody>{this.renderTableRows()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return { queryResults: state.queryResults };
};

export default connect(
  mapStateToProps,
  null
)(QueryResult);
