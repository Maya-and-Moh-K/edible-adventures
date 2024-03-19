export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    // Throw an error if the response was not 2xx
    if (!response.ok) {
      throw new Error(`Fetch failed. ${response.status} ${response.statusText}`)
    }

    // Check the content type to determine how to parse the response
    const isJson = (response.headers.get('content-type') || '').includes('application/json')
    let data = isJson ? await response.json() : await response.text()

    // return a tuple: [data, error]
    return [data, null]; 
  }
  catch (error) {
    // if there was an error, log it and return null
    console.error(error.message);

    // return a tuple: [data, error]
    return [null, error]; 
  }
}