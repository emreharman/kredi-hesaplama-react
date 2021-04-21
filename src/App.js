import React from "react";
import "./App.css";
import Header from "./components/Header";
import Calculate from "./components/Calculate";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <div className="content">
          <Calculate />
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
