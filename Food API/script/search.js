
async function getdata(url){
    let res = await fetch(url)
    let data = await res.json()
    return data.meals
}


function append(d,appenddata){
    d.forEach(({strMealThumb,strMeal,strCategory,strInstructions}) => {
        let div = document.createElement('div')
        div.classList.add("anotherclass")
        let p = document.createElement('p')
        p.innerText = strMeal
        let p1 = document.createElement('p')
        p1.innerText = `Category: ${strCategory}`
        let p2 = document.createElement('p')
        p2.innerText = `Instructions: ${strInstructions}`
         let img = document.createElement('img')
         img.src = strMealThumb
         div.append(img,p,p1,p2)
         appenddata.append(div)
    });
}

export {getdata,append}


