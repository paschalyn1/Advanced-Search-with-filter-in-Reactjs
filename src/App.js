import { useState } from "react";
import { Users } from "./users";
import Table from "./Table.js";
import "./styles.css";

function App() {
  const [query, setSearch] = useState("");
  const keys = ["id", "first_name", "last_name", "email", "gender"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase())
      )
    );
  };

  return (
    <div className="app">
      <div className="input_div">
        <input
          type="text"
          placeholder="Enter search here..."
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table data={search(Users)} />
    </div>
  );
}

export default App;
