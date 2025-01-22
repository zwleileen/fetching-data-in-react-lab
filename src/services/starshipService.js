const BASE_URL = `https://swapi.info/api/starships`;

async function index() {
  const url = `${BASE_URL}`;
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

export { index };
