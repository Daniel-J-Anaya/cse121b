//TMDB API - Daniel Anaya

//TMDB URLs and API Key fetched for data
const API_KEY = "api_key=2404fd77f876176d77dce569cf220d7c";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

//Getting elements from HTML
const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

//Loading page with base movies
getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

//Getting data from API and then creating cards with that data
function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <img src="${IMG_URL + poster_path}" alt="${title}">

    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview">

      <h3>Overview</h3>
      ${overview}
    </div>
    
    `;

    main.appendChild(movieElement);
  });
}

//Changing the color of the rating numbers so as the categorize ratings and make them easily identifiable
function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

//Search Bar functionality
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm) {
    getMovies(searchURL + '&query=' + searchTerm)
  }else{
    getMovies(API_URL);
  }

})

