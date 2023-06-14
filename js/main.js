let container = document.querySelector(".container");

let link = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
  .then((res) => res.json())
  .then((data) => {
    let arr = data.Search;
    arr.forEach((item) => {
      container.innerHTML += `
        <div class = "divs">
        <img src="${item.Poster}" alt="" />
        <h3>${item.Title}</h3>
        <h3>${item.Year}</h3>
        </div>`;
    });
  });
