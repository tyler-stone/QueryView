import React from "react";
import "./QueryResultTable.css";

const QueryResultTableHeaders = props => {
  return props.headers.map(header => {
    return <th key={header}>{header}</th>;
  });
};

const QueryResultTableRows = props => {
  return props.rows.map(row => {
    return (
      <tr key={row}>
        {row.map(cell => {
          return <td key={cell}>{cell}</td>;
        })}
      </tr>
    );
  });
};

const QueryResultTable = props => {
  return (
    <div className="queryTable">
      <table className="ui celled table">
        <thead>
          <tr>
            <QueryResultTableHeaders headers={props.results.headers} />
          </tr>
        </thead>
        <tbody>
          <QueryResultTableRows rows={props.results.rows} />
        </tbody>
      </table>
    </div>
  );
};

export default QueryResultTable;
