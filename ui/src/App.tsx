import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("");

  const requestGin = () => {
    //Request
    //setMessage
    // setMessage("Hello!");
    fetch("http://localhost:8080/ping")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to Spotify!!</h1>
        <button onClick={() => requestGin()}>Click me!</button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
