function slidesshow() {
  let img = [
    "https://i.pinimg.com/originals/dc/12/02/dc120247fdedf8cc34e45496e6280db0.jpg",
    "https://d229noksprj98s.cloudfront.net/wp-content/uploads/2021/04/oculus-and-respawn-win-gamings-first-oscar-for-documentary-short-1000x568.jpg",
    "https://english.cdn.zeenews.com/sites/default/files/2020/06/12/866328-life-movie.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/81f630300cf9006de9041c854439073ddecc6eac6db9bc0a1512b439648a478d._UY500_UX667_RI_V_TTW_.jpg",
    "https://s2.dmcdn.net/v/SpZ3B1WU37K7wpq4Q/x1080",
    "https://i.ytimg.com/vi/cbw9hlBnG74/maxresdefault.jpg",
  ];
  console.log(img);

  let i = 0;
  setInterval(function () {
    if (i == img.length) {
      i = 0;
    }
    let parent = document.getElementById("headline");
    parent.innerHTML = `<img src= "${img[i]}"/>`;
    i++;
  }, 2000);
}
slidesshow();

const movies = [
  {
    name: "Mank",
    release: "2020",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTllMjI0ZGYtM2FmZC00ZmY4LTlkNTYtZThlOWQ1OGQyZTA3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
    rating: "6.9",
  },
  {
    name: "Soul",
    release: "2020",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UY209_CR0,0,140,209_AL_.jpg",
    rating: "8.1",
  },
  {
    name: "Joker",
    release: "2019",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
    rating: "8.4",
  },
  {
    name: "Avengers:Endgame",
    release: "2019",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
    rating: "8.4",
  },
  {
    name: "Parasite",
    release: "2019",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY209_CR0,0,140,209_AL_.jpg",
    rating: "8.6",
  },
  {
    name: "Toy Story 4",
    release: "2019",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
    rating: "7.7",
  },
  {
    name: "Cold War",
    release: "2018",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTJmNzExOGItZTQyMi00YzBlLTk0ZTQtNzAxYmUwZDQwZjU4XkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_UY209_CR0,0,140,209_AL_.jpg",
    rating: "7.6",
  },
  {
    name: "Minari",
    release: "2020",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWEzOTNjNDgtZDhhYS00ODAxLWIzNGMtYjU3OGZhYmI3ZDU4XkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_UY209_CR2,0,140,209_AL_.jpg",
    rating: "7.5",
  },
  {
    name: "Crip Camp",
    release: "2020",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTNlMDI3MGYtY2FmNy00ZDdmLTkzZDMtMDg1MWYyM2M4YzQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
    rating: "7.7",
  },
];
if (localStorage.getItem("movies") == null) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

function add_movies(data) {
  let parent = document.getElementById("movie_details");
  parent.innerHTML = null;

  //let data = JSON.parse(localStorage.getItem("movies"));
  data.forEach((el) => {
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerHTML = `Name: ${el.name}`;

    let p_release = document.createElement("p");
    p_release.innerHTML = `Released: ${el.release}`;

    let p_rating = document.createElement("p");
    p_rating.innerHTML = `Rating: ${el.rating}`;

    let p_poster = document.createElement("img");
    p_poster.src = el.poster;

    div.append(p_name, p_release, p_rating, p_poster);
    parent.append(div);
  });
}
add_movies(JSON.parse(localStorage.getItem("movies")));

function sortLH() {
  let movi = JSON.parse(localStorage.getItem("movies"));
  movi = movi.sort(function (a, b) {
    return a.rating - b.rating;
  });
  add_movies(movi);
}
function sortHL() {
  let movi = JSON.parse(localStorage.getItem("movies"));
  movi = movi.sort(function (a, b) {
    return b.rating - a.rating;
  });
  add_movies(movi);
}
