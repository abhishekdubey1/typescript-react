import ReactDOM from "react-dom";
import React, { FC } from "react";

const data = [
  { alias: "James Bond", rollNo: "143E" },
  { alias: "Agent Z", rollNo: "143E" }

  // { name: "Abhishek", job: "recently quit unifize", happiness: 0 },
  // { name: "Amarjit", job: "Still at Frontrow", happiness: 0 }
];

interface TableProps<GenericData> {
  columns: Array<keyof GenericData>;
  data: GenericData[];
}

function Table<AvoidShadowedGenericData>({
  data,
  columns
}: TableProps<AvoidShadowedGenericData>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((c, i) => (
              <td key={i}>{row[c]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <Table data={data} columns={["alias", "rollNo"]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
