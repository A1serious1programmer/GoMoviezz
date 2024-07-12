document.querySelector(".button").addEventListener("click", function(){show_det(event, document.querySelector("input").value);
});

fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
  headers : {"x-rapidapi-key": "92d36c2446msh1a0c7162cd192dfp17f1d9jsnba38a9805a6a"}
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for(let i = 0 ; i < 20 ; i++){
      if (data[i].image != ''){
        all_post[i].classList.remove("hide");
        all_post[i].src = (data[i].image);
    }}});

const all_post = document.querySelectorAll(".movies div img");
function show_det(event, movie){
  event.preventDefault();
  fetch("https://imdb-api.com/en/API/SearchSeries/k_1d5br83e/"+movie)
    .then(response => response.json())
    .then(data => {
      var count = 0;
      console.log(data);
      for(let i = 0 ; i < 20 ; i++){
        if (data.results[i].image != ''){
          all_post[count].classList.remove("hide");
          all_post[count].src = (data.results[i].image);
          count++;
      }
    }
    for(let i = count ; i < 20 ; i++){
      all_post[i].classList.add("hide");
    }
    })
}
