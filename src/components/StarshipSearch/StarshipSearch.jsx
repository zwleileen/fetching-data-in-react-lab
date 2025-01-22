
import { useState } from "react";

const StarshipSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [lastSearch, setLastSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSearch(searchTerm);
        setLastSearch(searchTerm);
        setSearchTerm("");
    }

    //Notes: any change to input will call handleSearch directly
    const handleChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        props.handleSearch(newSearchTerm);
    }
 
    return (
    <>  
    <h2>Search</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search Term: </label>
        <input type="text" id="searchTerm" name="searchTerm" value={searchTerm} onChange={handleChange} placeholder="Enter starship name"/>
        <button type="submit">Search</button>
    </form>
    <p>{lastSearch ? `Last search: ${lastSearch}` : `Search for a starship by name.`}</p>
    </>
    );
  }
  
  export default StarshipSearch
  