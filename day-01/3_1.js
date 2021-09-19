let data = JSON.parse(localStorage.getItem("cart"));

let parent = document.getElementById("data");

data.forEach((el) => {
  let div = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = `Name:${el.name}`;

  let p_rating = document.createElement("p");
  p_rating.innerHTML = `Rating: ₹  ${el.price}`;

  let img = document.createElement("img");
  img.src = el.image;

  div.append(p_name, p_rating, img);
  parent.append(div);
});

function total() {
  var par = document.getElementById("n1");
  let p = (document.createElement("p").innerHTML = data.length);
  par.innerHTML = null;
  par.append(p);
}

function price_tot() {
  let tot_pri = document.getElementById("t1");
  let data = JSON.parse(localStorage.getItem("cart"));
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += Number(data[i].price);
  }
  tot_pri.innerHTML = null;
  tot_pri.append(sum);
}
console.log(tot_pri.value);

function submit() {
  let prom_sel = document.getElementById("prom_sel");
  var prom_diff = document.getElementById("prom_diff");
  let promo = document.getElementById("promo").value;
  let data = JSON.parse(localStorage.getItem("cart"));
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += Number(data[i].price);
  }
  var diff = 0;
  var fir_dif = 0;
  if (promo == "masai30") {
    fir_dif = (30 / 100) * sum;
    diff = sum - (30 / 100) * sum;
  } else if (promo == "masai50") {
    fir_dif = (50 / 100) * sum;
    diff = sum - (50 / 100) * sum;
  } else if (promo == "masai80") {
    fir_dif = (80 / 100) * sum;
    diff = sum - (80 / 100) * sum;
  }
  prom_sel.innerHTML = null;
  prom_diff.innerHTML = null;
  prom_sel.append(Math.floor(diff));
  prom_diff.append(Math.floor(fir_dif));
  console.log(Math.floor(diff));
}

function location_su() {
  JSON.parse(localStorage.getItem("cart"));
  localStorage.removeItem("cart");
  parent.remove();
  window.location.href = "./sucess_page.html";
}
