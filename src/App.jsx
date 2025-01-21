// src/App.jsx

import { useState } from "react";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import * as starshipService from './services/starshipService';

const App = () => {

  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  const fetchData = async () => {
    const data = await starshipService.show("2");
    console.log('Data:', data)
  }

  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch fetchData={fetchData}/>
    <StarshipList/>
    </>
  );
}

export default App
