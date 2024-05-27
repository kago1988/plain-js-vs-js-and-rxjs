function fetchData(url, retries = 3) {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        if (retries > 0) {
          console.log(`Retrying... (${retries} retries left)`);
          fetchData(url, retries - 1);
        } else {
          console.error('Failed to fetch data:', error);
        }
      });
  }
  
  fetchData('https://api.example.com/data');
  