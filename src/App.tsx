import React from "react";
import "./App.css";
import { Technologies } from "./components/technologies/Technologies";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
}

export default App;
