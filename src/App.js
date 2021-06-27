import "./App.css";
import { Test1 } from "./Test1";
import { Test2 } from "./Test2";
import React from "react";

function App() {
  return (
    <div className="App">
      <Test2 arg={100} />
    </div>
  );
}

export default App;
