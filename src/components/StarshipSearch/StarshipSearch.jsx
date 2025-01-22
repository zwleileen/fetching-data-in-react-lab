// src/App.jsx
import * as starshipService from '../../services/starshipService';
import { useState } from "react";

const StarshipSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading("loading...")
        const shipId = await starshipService.findStarshipIndex(searchTerm);
        if (shipId) {
            props.fetchData(shipId);
        } else {
            console.log('Starship not found')
        }
        setSearchTerm("");
        setLoading("");
    }

    return (
    <>  
    <h2>Search</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search Term: </label>
        <input type="text" id={props.shipId} name={searchTerm} value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Enter starship name"/>
        <button onClick={props.fetchData}>Search</button>
    </form>
    <p>{loading}</p>
    </>
    );
  }
  
  export default StarshipSearch
  