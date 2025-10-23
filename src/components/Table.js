import React from "react";
import TableRow from "./TableRow";

const Table = ({ participants }) => {


  if (!participants.length)
    return <div></div>;
    const totalCost = participants.reduce(
        (acc, participant) => (acc += participant.time * participant.rate),
        0
      );
  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Hours in meeting</th>
            <th>Hourly rate</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <TableRow key={index} {...participant} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="no-left-bottom-border td-right fw-700">Total cost 👉</td>
            <td className="td-right fw-700">{participants.length > 1 ? totalCost.toFixed(2) : ''}&nbsp;€</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
