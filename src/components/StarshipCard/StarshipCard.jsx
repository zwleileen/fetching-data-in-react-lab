// src/App.jsx

const StarshipCard = (props) => {

    return (
      <>
        <h3>{props.starship.name}</h3>
        <p>Class: {props.starship.starship_class}</p>
        <p>Manufacturer: {props.starship.manufacturer}</p>
        <p>Model: {props.starship.model}</p>
      </>
    );
  }
  
  export default StarshipCard
  