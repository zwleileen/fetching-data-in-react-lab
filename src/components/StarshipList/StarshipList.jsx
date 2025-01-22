// src/App.jsx

import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = (props) => {

    return (
    <>
    <h2>Starships</h2>
    <ul>
        {props.starshipsData.map((starship) => (
            <li key={starship.id}><StarshipCard starship={starship}/></li>
        ))}
    </ul>
    </>
    );
  }
  
  export default StarshipList
  