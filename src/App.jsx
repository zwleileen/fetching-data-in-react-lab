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

  const fetchData = async (shipId) => {
    const data = await starshipService.index(shipId);
    const newStarshipsData = {
      name: data.name,
      starship_class: data.starship_class,
      manufacturer: data.manufacturer,
      model: data.model
    }
    if (newStarshipsData) {
      setStarshipsData([newStarshipsData]); //Store the fetched data in state
    }
  }
  console.log('Data:', starshipsData);

  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch fetchData={fetchData}/>
    <StarshipList fetchData={fetchData} starshipsData={starshipsData}/>
    </>
  );
}

export default App
