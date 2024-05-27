function poll(url, interval) {
    function fetchData() {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Update UI with new data
          console.log(data);
          setTimeout(fetchData, interval);
        })
        .catch(error => console.error('Failed to fetch data:', error));
    }
  
    fetchData();
  }
  
  poll('https://api.example.com/data', 5000);
  