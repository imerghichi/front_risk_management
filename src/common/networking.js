const API_PATH = "http://localhost:8080";

async function fetchApi(path, options = {}) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const params = {
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        ...options
    };

    const data = await fetch(API_PATH + path, params);
    return await data.json();
}

export default fetchApi;