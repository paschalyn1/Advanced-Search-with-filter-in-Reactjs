import React from "react";
import "./styles.css";

function Table({ data }) {
  if (data.length > 0) {
    return (
      <table className="table">
        <caption className="caption">Students data</caption>
        <tbody>
          <tr>
            <th>No</th>
            <th>First name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>

          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (<h1>No result found</h1>);
}

export default Table;
