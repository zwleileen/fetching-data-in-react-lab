const BASE_URL = `https://swapi.info/api/starships`;

async function show(index) {
  const url = `${BASE_URL}/${index}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export { show };
