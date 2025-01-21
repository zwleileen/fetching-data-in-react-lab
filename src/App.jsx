// src/App.jsx

import { useState } from "react";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import * as starshipService from './services/starshipService';
import { useEffect } from "react";

const App = () => {

  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  useEffect(() => {
    fetchData(2); }, []); //default to index 2 on load

  const fetchData = async (starshipIndex) => {
    const data = await starshipService.index(starshipIndex);
    console.log('Data:', data);
    if (data) {
      setStarshipsData([data]); //Store the fetched data in state
    }
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
