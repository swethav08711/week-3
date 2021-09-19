function show_loc() {
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
  arra.push(location); //pushing the array it doesnt work for JSON
  console.log(arra);
  //only one data at a time
  for (let i = 0; i < arra.length; i++) {
    // console.log(arra[i]);
    if (arra[i].password === password) {
      window.location.href = "./home.html";
      break;
    }
  }
  // localStorage.setItem("user_data", JSON.stringify(arra)); //set items to local storage object to JSON sending it back
  // form.reset()
}
