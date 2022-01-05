import ReactDOM from "react-dom";
import React, { FC } from "react";

const data = [
  { name: "Abhishek", job: "recently quit unifize", happiness: 0 },
  { name: "Amarjit", job: "Still at Frontrow", happiness: 0 }
];

interface TableProps {
  columns: Array<"name" | "job" | "happiness">;
  data: Array<{
    name: string;
    job: string;
    happiness: number;
  }>;
}

const Table: FC<TableProps> = ({ data, columns }) => (
  <table>
    <thead>
      {columns.map((c, i) => (
        <th key={i}>{c}</th>
      ))}
    </thead>
    {data.map(
      (row: { name: string; job: string; happiness: number }, i: number) => (
        <tr key={row.name}>
          {columns.map((c, i) => (
            <td key={i}>{row[c]}</td>
          ))}
        </tr>
      )
    )}
  </table>
);

function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <Table data={data} columns={["name", "happiness", "job"]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
