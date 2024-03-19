const getElement = document.querySelectorAll(".item_menu");
const heading = document.querySelector("h1");
// const btn = document.querySelector("button");

// console.log(getLength);



async function chickenData(){
    for(let i = 0; i<getElement.length; i++){
        getElement[i].style.display = "none";
    }
    heading.innerText = "Chicken"
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let newData = data.meals;
    console.log(newData);

    const item = document.querySelector(".item");
    newData.map((e) =>{
       let itemMenu = document.createElement("div");
       itemMenu.classList.add("item_menu");
       let image = document.createElement("img");
       image.src = e.strMealThumb;
       let name = document.createElement("h2");
       let btn = document.createElement("button");
       btn.classList.add("btn");
       btn.innerText = "View Recipe";
       name.innerText = e.strMeal;   
       itemMenu.appendChild(image);
       itemMenu.appendChild(name);
       item.appendChild(itemMenu);
       itemMenu.appendChild(btn);
       
    })

}

async function cakesData(){
    for(let i = 0; i<getElement.length; i++){
        getElement[i].style.display = "none";
    }
    heading.innerText = "Cakes"
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=cakes`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let newData = data.meals;
    console.log(newData);

    const item = document.querySelector(".item");
    newData.map((e) =>{
       let itemMenu = document.createElement("div");
       itemMenu.classList.add("item_menu");
       let image = document.createElement("img");
       image.src = e.strMealThumb;
       let name = document.createElement("h2");
       name.innerText = e.strMeal;   
       itemMenu.appendChild(image);
       itemMenu.appendChild(name);
       item.appendChild(itemMenu);

    })

}

async function pizzaData(){
    for(let i = 0; i<getElement.length; i++){
        getElement[i].style.display = "none";
    }
    heading.innerText = "Pizza"
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let newData = data.meals;
    console.log(newData);

    const item = document.querySelector(".item");
    newData.map((e) =>{
       let itemMenu = document.createElement("div");
       itemMenu.classList.add("item_menu");
       let image = document.createElement("img");
       image.src = e.strMealThumb;
       let name = document.createElement("h2");
       name.innerText = e.strMeal;   
       itemMenu.appendChild(image);
       itemMenu.appendChild(name);
       item.appendChild(itemMenu);

    })

}

async function riceData(){
    for(let i = 0; i<getElement.length; i++){
        getElement[i].style.display = "none";
    }
    heading.innerText = "Rice"
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=rice`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let newData = data.meals;
    console.log(newData);

    const item = document.querySelector(".item");
    newData.map((e) =>{
       let itemMenu = document.createElement("div");
       itemMenu.classList.add("item_menu");
       let image = document.createElement("img");
       image.src = e.strMealThumb;
       let name = document.createElement("h2");
       name.innerText = e.strMeal;   
       itemMenu.appendChild(image);
       itemMenu.appendChild(name);
       item.appendChild(itemMenu);

    })

}

async function wheatData(){
    for(let i = 0; i<getElement.length; i++){
        getElement[i].style.display = "none";
    }
    heading.innerText = "Wheat"
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=wheat`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let newData = data.meals;
    console.log(newData);

    const item = document.querySelector(".item");
    newData.map((e) =>{
       let itemMenu = document.createElement("div");
       itemMenu.classList.add("item_menu");
       let image = document.createElement("img");
       image.src = e.strMealThumb;
       let name = document.createElement("h2");
       name.innerText = e.strMeal;   
       itemMenu.appendChild(image);
       itemMenu.appendChild(name);
       item.appendChild(itemMenu);

    })

}

function reset(){
        location.reload();
    }