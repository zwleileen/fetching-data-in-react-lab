// src/App.jsx

const StarshipCard = (props) => {

    return (
      <>
        <p>Name: {props.starship.name}</p>
        <p>Starship class: {props.starship.starship_class}</p>
        <p>Manufacturer: {props.starship.manufacturer}</p>
        <p>Model: {props.starship.model}</p>
      </>
    );
  }
  
  export default StarshipCard
  