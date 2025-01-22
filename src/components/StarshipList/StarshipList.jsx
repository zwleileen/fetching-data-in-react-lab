// src/App.jsx

import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = (props) => {

    const count = props.displayedStarships.length

    return (
    <>
    <h2>Starships</h2>
    <p>Number of results: {count}</p>
    <ul>
        {props.displayedStarships.map((starship) => (
            <li key={starship.id}><StarshipCard starship={starship}/></li>
        ))}
    </ul>
    </>
    );
  }
  
  export default StarshipList
  