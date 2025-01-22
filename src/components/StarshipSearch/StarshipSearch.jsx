
import { useState } from "react";

const StarshipSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSearch(searchTerm);
        setSearchTerm("");
        setLoading("");
    }

    

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
 
    
    return (
    <>  
    <h2>Search</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search Term: </label>
        <input type="text" id="searchTerm" name="searchTerm" value={searchTerm} onChange={handleChange} placeholder="Enter starship name"/>
        <button type="submit">Search</button>
    </form>
    <p>{loading}</p>
    </>
    );
  }
  
  export default StarshipSearch
  