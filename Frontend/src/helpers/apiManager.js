
export const backendCall = async (method, url, data = {}) => {
  let results = null;
  try {
    let params = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };
    if (method !== 'GET') {
      params['body'] = JSON.stringify(data);
    }
    let result = await fetch(url, params);
    results = await result.json();
  }
  catch (e) {
    console.log(e);
  }
  return results;
}
