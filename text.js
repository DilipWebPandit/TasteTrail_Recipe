const getElement = document.querySelectorAll(".item_menu");
const heading = document.querySelector("h1");

let anchor = document.querySelectorAll("a");
let listCard = document.querySelectorAll(".item_menu");

for(let i=0; i<anchor.length; i++){
    anchor[i].addEventListener("click", async function(e) {
        for(let j =0; j<listCard.length; j++){
            listCard[j].style.display = "none";
        }
        if(e.target.tagName === "A"){
            const value = e.target.innerText;
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
            let response = await fetch(url);
            let data = await response.json();
            let newData = data.meals;
            console.log(newData);
            // console.log(newData[0].strMeal);

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

                btn.addEventListener("click", ()=> {
                    let newqurey = document.querySelectorAll(".item_menu");
                    for(let k=5; k<newqurey.length; k++){
                        newqurey[k].style.display = "none";
                    }
                    let newItem = document.querySelector(".item");

                    newItem.style.display = "flex";
                    newItem.style.flexDirection = "column";
                    newItem.style.justfyContent = "center";
                    newItem.style.alignItem = "center";

                    newItem.innerHTML = `
                        <div class="item_menu">
                        <h1 style="text-align: center;">${e.strMeal}</h1>
                        <img src="${e.strMealThumb}" alt="Random image" style="width: 90%; height: 60vh;">
                        <h3><em>Item's List:-</em> 
                        ${e.strIngredient1} = ${e.strMeasure1},<br>
                        ${e.strIngredient2} = ${e.strMeasure2},<br>
                        ${e.strIngredient3} = ${e.strMeasure3},<br>
                        ${e.strIngredient4} = ${e.strMeasure4},<br>
                        ${e.strIngredient5} = ${e.strMeasure5},<br>
                        ${e.strIngredient6} = ${e.strMeasure6},<br>
                        ${e.strIngredient7} = ${e.strMeasure7},<br>
                        ${e.strIngredient8} = ${e.strMeasure8},<br>
                        ${e.strIngredient9} = ${e.strMeasure9},<br>
                        ${e.strIngredient10} = ${e.strMeasure10},<br>
                        ${e.strIngredient11} = ${e.strMeasure11},<br>
                        ${e.strIngredient12} = ${e.strMeasure12},<br>
                        ${e.strIngredient13} = ${e.strMeasure13},<br>
                        ${e.strIngredient14} = ${e.strMeasure14},<br>
                        ${e.strIngredient15} = ${e.strMeasure15},<br>
                        ${e.strIngredient16} = ${e.strMeasure16},<br>
                        ${e.strIngredient17} = ${e.strMeasure17},<br>
                        ${e.strIngredient18} = ${e.strMeasure18},<br>
                        ${e.strIngredient19} = ${e.strMeasure19},<br>
                        ${e.strIngredient20} = ${e.strMeasure20},<br>
                        </h3>
                        
                        </div>
                    `




                    
                })
                
                })
            }

        }
    )
}

function reset(){
    location.reload();
}