import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <div>VVVV</div>
      <Route path="/login" component={Login}></Route>
    </div>
  );
}

export default App;
