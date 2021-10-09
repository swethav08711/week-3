import navbar from "./components/senddata.js";
import {getdata,append} from "./script/search.js"
let showlatest = document.getElementById('showlatest')
showlatest.innerHTML = navbar()


let appenddata = document.getElementById('data')
let getjewellary = getdata('https://www.themealdb.com/api/json/v1/1/search.php?s')
getjewellary.then((res)=>{
    append(res,appenddata)
})


