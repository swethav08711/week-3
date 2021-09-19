function add_location() {
  let form = document.getElementById("form_input");
  let name = form.name.value;
  let contact = form.contact.value;
  let email = form.email.value;
  let password = form.password.value; //parent-id-value
  //when ever to push itin to local storage it should be in JSON
  // so we need to store data in to local storage initialy ther is one item present in local storage
  let arra = localStorage.getItem("user_data");
  // console.log(arra) //output => null shows  so..
  if (arra == null) {
    //user using app for first time arra shows null   so gotta initialise new array
    arra = [];
  } else {
    //if array is already there .. array will be ther inthe form of JSON so should convert to object using parse in array format
    arra = JSON.parse(localStorage.getItem("user_data"));
  }
  // let id = arra.length
  let location = {
    //we need it in the form of object
    //id,
    name, //if key and value are then only key can be written
    contact,
    email,
    password,
  };
  // console.log(location) //initialy we are consoling it in browser no storing
  //am able to get object in console
  arra.push(location);
  // window.location.href = "./Signup.html"; //pushing the array it doesnt work for JSON
  console.log(arra); //only one data at a time
  localStorage.setItem("user_data", JSON.stringify(arra)); //set items to local storage object to JSON sending it back
  form.reset();
  //window.location.href = "./Signup.html";
}

function show_loc() {
  const addi = JSON.parse(localStorage.getItem("user_data"));

  const form = document.getElementById("form_input");
  const password = form.password.value;

  //JSON to object in the foem of array
  for (var i = 0; i < addi.length; i++) {
    if (addi[i].password == password) {
      window.location.href = "./Home.html";
      break;
    } else {
      alert("Invalid Credential");
      return;
    }
  }
}
//addi.push(el);
//console.log(addi); //array of Objects
