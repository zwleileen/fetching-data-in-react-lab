// src/App.jsx

import { useState } from "react";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";

const App = () => {

  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch/>
    <StarshipList/>
    </>
  );
}

export default App
