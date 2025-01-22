// src/App.jsx

const StarshipCard = (props) => {

    return (
      <>
        <p>{props.starship.name}</p>
        <p>Class: {props.starship.starship_class}</p>
        <p>Manufacturer: {props.starship.manufacturer}</p>
        <p>Model: {props.starship.model}</p>
      </>
    );
  }
  
  export default StarshipCard
  