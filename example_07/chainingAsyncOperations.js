fetch('https://api.example.com/first')
  .then(response => response.json())
  .then(firstResult => fetch('https://api.example.com/second'))
  .then(response => response.json())
  .then(secondResult => {
    // Handle result of second call
    console.log(secondResult);
  })
  .catch(error => console.error('Error:', error));
