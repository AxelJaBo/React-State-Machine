const fetchCountries = () =>
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json()); 

export { fetchCountries };