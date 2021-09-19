function add_location() {
  let form = document.getElementById("E-commerce");
  let name = form.name.value;
  let price = form.price.value;
  let image = form.image.value; //parent-id-value
  //when ever to push itin to local storage it should be in JSON
  // so we need to store data in to local storage initialy ther is one item present in local storage
  let arra = localStorage.getItem("location");
  // console.log(arra) //output => null shows  so..
  if (arra == null) {
    //user using app for first time arra shows null   so gotta initialise new array
    arra = [];
  } else {
    //if array is already there .. array will be ther inthe form of JSON so should convert to object using parse in array format
    arra = JSON.parse(localStorage.getItem("location"));
  }
  // let id = arra.length
  let location = {
    //we need it in the form of object
    //id,
    name, //if key and value are then only key can be written
    price,
    image,
  };
  // console.log(location) //initialy we are consoling it in browser no storing
  //am able to get object in console
  arra.push(location); //pushing the array it doesnt work for JSON
  console.log(arra); //only one data at a time
  localStorage.setItem("location", JSON.stringify(arra)); //set items to local storage object to JSON sending it back
  form.reset();
}

//function to show the data on the webpage

function show_location() {
  let data = JSON.parse(localStorage.getItem("location"));
  console.log("datat: ", data); //getting data from local storage initialy data willbe in JSON we convert it object using JSON.parse
  let parent = document.getElementById("data"); //making parent div to insert child div
  parent.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerHTML = `Name: ${el.name}`;

    let p_rating = document.createElement("p");
    p_rating.innerHTML = `Price: ₹${el.price}`;

    let img = document.createElement("img");
    img.src = el.image;

    let btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.style.display = "block";

    btn.onclick = function () {
      addFav(el);
    };

    div.append(p_name, p_rating, img, btn);
    parent.append(div);
  });
}
function addFav(el) {
  //console.log(el.length)
  alert("Added to cart");
  let addi;
  addi = localStorage.getItem("cart"); //is ther anything called cart obvious not at starting
  if (addi == null) {
    addi = [];
  } else {
    addi = JSON.parse(addi); //JSON to object in the foem of array
  }
  addi.push(el);
  localStorage.setItem("cart", JSON.stringify(addi)); //back to JSON from Object
  console.log(addi);
}

function view_cart() {
  window.location.href = "./3_1.html";
}
