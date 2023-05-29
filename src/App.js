import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import RoutesList from "./RoutesList";

function App() {
  const [dogs, setDogs] = useState({});

  async function getDogs() {
    const resp = await axios.get("http://localhost:5001/dogs");
    console.log(resp.data);
  }
  getDogs();
  return (
    <p>This is a paragraph</p>
    // <Nav dogs={dogs}/>
  );
}

export default App;
