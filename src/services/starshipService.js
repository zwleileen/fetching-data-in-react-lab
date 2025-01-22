const BASE_URL = `https://swapi.info/api/starships`;

async function index(shipId) {
  const url = `${BASE_URL}/${shipId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function getAllStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function findStarshipIndex(name) {
  try {
    const data = await getAllStarships();
    const starship = data.results.find(
      (ship) => ship.name.toLowerCase() === name.toLowerCase()
    );

    if (starship) {
      return starship.url.split("/").slice(-1)[0];
    }
    return null;
  } catch (error) {
    console.error(error.message);
  }
}

export { index, findStarshipIndex };
