import { useEffect, useState } from "react";
import "./App.css";

import * as React from 'react';

function App() {
  return (
    <Table>
      <Row />
    </Table>
  );
}

const Row = () => {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/employees")
    .then(response => response.json())
    .then(data => setEmployees(data))
  }, [])

  return (
    <>
      {
        employees.map((emp, i) => {
          return (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          );
        })
      }
    </>
  )
};

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default App;
