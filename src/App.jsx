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
  // const { starshipId } = useParams();


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
