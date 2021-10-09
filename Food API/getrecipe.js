import navbar from "./components/senddata.js";
import {getdata,append} from "./script/search.js"
let getreci = document.getElementById('getreci')
getreci.innerHTML = navbar()

let appenddata = document.getElementById('data')
let getjewellary = getdata('https://www.themealdb.com/api/json/v1/1/random.php')
getjewellary.then((res)=>{
    append(res,appenddata)
})


