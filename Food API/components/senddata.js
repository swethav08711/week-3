function navbar(){
    return ` <div id="navbar">
    <div>
   <input type="text" id="search_item">
    <button id="btn">submit</button>
    </div>
    <div class="options">
    <h3><a href="./index.html">Home</a></h3>
        <h3><a href="./getRecipe.html">get receipe of the day</a></h3>
        <h3><a href="./showlatest.html">show latest receipe</a></h3>
    </div>
</div>
<div id="data"></div>`
}
export default navbar