const API_PATH = "http://localhost:8080/";

async function fetchApi(path, options = {}) {
    const data = await fetch(API_PATH + path, options);
    return await data.json();
}

export default fetchApi;