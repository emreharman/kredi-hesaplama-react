import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Calculate from "./components/Calculate";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState({
    aylikTaksit: 0,
    toplamOdeme: 0,
    faizOrani: 0,
  });
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <div className="content">
          <Calculate setResult={setResult} />
          <Result result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
