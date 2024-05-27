const searchBox = document.getElementById('searchBox');
let debounceTimeout;

searchBox.addEventListener('input', event => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const value = event.target.value;
    // Make an API call or update UI
    console.log(value);
  }, 300);
});
