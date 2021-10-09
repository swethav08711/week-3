import navbar from "./components/senddata.js"
document.body.innerHTML = navbar()


let appenddata = document.getElementById('data')
let btn = document.getElementById('btn')
btn.addEventListener('click',searchfood)
async function searchfood(){
    let search_item = document.getElementById('search_item').value
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_item}`)
    let data = await res.json()
    getitem(data.meals)
}
function getitem(d){
    d.forEach(({strMealThumb,strMeal,strCategory,strInstructions}) => {
        let div = document.createElement('div')
        div.classList.add("anotherclass")
        let p = document.createElement('p')
        p.innerText = strMeal
        let p1 = document.createElement('p')
        p1.innerText = strCategory
        let p2 = document.createElement('p')
        p2.innerText = strInstructions
         let img = document.createElement('img')
         img.src = strMealThumb
         div.append(img,p,p1,p2)
         appenddata.append(div)
    });
}

