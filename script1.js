
fetch("https://imdb-api.com/en/API/MostPopularMovies/k_1d5br83e")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelectorAll(".aa div img")[0].src = data.items[0].image;
  });

fetch("https://imdb-api.com/en/API/MostPopularTVs/k_1d5br83e")
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll(".aa div img")[1].src = data.items[0].image;
    });
