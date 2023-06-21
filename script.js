

document.querySelector(".button").addEventListener("click", function(){show_det(event, document.querySelector("input").value);
});

fetch("https://imdb-api.com/en/API/MostPopularMovies/k_1d5br83e")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for(let i = 0 ; i < 20 ; i++){
      if (data.items[i].image != ''){
        all_post[i].classList.remove("hide");
        all_post[i].src = (data.items[i].image);
    }}});

const all_post = document.querySelectorAll(".movies div img");
function show_det(event, movie){
  event.preventDefault();
  fetch("https://imdb-api.com/en/API/SearchMovie/k_1d5br83e/"+movie)
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
