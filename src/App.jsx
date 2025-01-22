// src/App.jsx
import './App.css'
import { useState } from "react";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import * as starshipService from './services/starshipService';
import { useEffect } from "react";

const App = () => {

  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);


  useEffect(() => {
    fetchData(); }, []); //load all data on launch

  const fetchData = async () => {
    const data = await starshipService.index();
    const formattedData = data.map(ship => (
    {
      id: ship.url.split('/').slice(-1)[0],
      name: ship.name,
      starship_class: ship.starship_class,
      manufacturer: ship.manufacturer,
      model: ship.model
    }))
    if (formattedData)
      setStarshipsData(formattedData); //Store the fetched data in state
      setDisplayedStarships(formattedData);
  }
  // console.log('Data:', starshipsData);
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
        setDisplayedStarships(starshipsData);
    } else {
        const searches = starshipsData.filter(ship => ship.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setDisplayedStarships(searches);
    }
}

  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch fetchData={fetchData} starshipsData={starshipsData} setDisplayedStarships={setDisplayedStarships} handleSearch={handleSearch}/>
    <StarshipList fetchData={fetchData} starshipsData={starshipsData} displayedStarships={displayedStarships}/>
    </>
  );
}

export default App
