import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryFrom";
import EntriesChartTracker from "./EntriesChartTracker/EntriesChartTracker";

function App() {
  const [entries, setEntries] = useState([
    { weight: 175, date: "11-23-2021" },
    { weight: 176, date: "11-24-2021" },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentsEntries={entries} />
      <AddEntryForm addNewEntry={addNewEntry} />
      <EntriesChartTracker parentsEntries={entries} />
    </div>
  );
}

export default App;
