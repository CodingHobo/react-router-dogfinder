import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import RoutesList from "./RoutesList";

function App() {
  const [dogs, setDogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  async function getDogs() {
    const resp = await axios.get("http://localhost:5001/dogs");
    setDogs(resp.data);
    setIsLoading(false);
  }
  if (isLoading){
    getDogs();
    return <div>Loading...</div>
  }


  return (
    <div>
      <BrowserRouter>
    <Nav dogs={dogs}/>
    <RoutesList dogs={dogs} />
    </BrowserRouter>
    </div>
  );
}

export default App;
