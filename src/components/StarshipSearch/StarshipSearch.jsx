// src/App.jsx

const StarshipSearch = (props) => {

    return (
    <>  
    <h2>Search</h2>
    <label htmlFor="starshipAPI">Search Term: </label>
    <input type="text" id="starshipAPI" name="starshipAPI" value=""/>
    <button onClick={props.fetchData}>Search</button>
    </>
    );
  }
  
  export default StarshipSearch
  