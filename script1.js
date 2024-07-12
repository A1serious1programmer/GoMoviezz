
fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
  headers : {"x-rapidapi-key": "92d36c2446msh1a0c7162cd192dfp17f1d9jsnba38a9805a6a"}
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelectorAll(".aa div img")[0].src = data[0].image;
  });

fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
    headers : {"x-rapidapi-key": "92d36c2446msh1a0c7162cd192dfp17f1d9jsnba38a9805a6a"}
  )
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll(".aa div img")[1].src = data[1].image;
    });
