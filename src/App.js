import React from "react";
import EntryForm from "./Components/EntryForm";

import "./App.css";

function App() {
  // const [flag, setFlag] = useState(false);

  return (
    <div className="App">
      {/* Create two text inputs, one for amount requestd, and duration  */}
      <div className={"top-level-container"}>
        <h1>Iwocalculator</h1>
        <div className={"input-parent"}>
          <EntryForm />
        </div>
      </div>
    </div>
  );
}

export default App;
