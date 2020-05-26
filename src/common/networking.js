async function fetchApi(path, options = {}) {
    const data = await fetch(path, options);
    return await data.json();
}

export default fetchApi;