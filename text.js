const getElement = document.querySelectorAll(".item_menu");
const heading = document.querySelector("h1");

let anchor = document.querySelectorAll("a");
let listCard = document.querySelectorAll(".item_menu");

for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("click", async function (e) {
    for (let j = 0; j < listCard.length; j++) {
      listCard[j].style.display = "none";
    }

    if (e.target.tagName === "A") {
      const value = e.target.innerText;
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
      let response = await fetch(url);
      let data = await response.json();
      let newData = data.meals;
      console.log(newData);

      const item = document.querySelector(".item");

      newData.map((e) => {
        let itemMenu = document.createElement("div");
        itemMenu.classList.add("item_menu");
        let image = document.createElement("img");
        image.src = e.strMealThumb;
        let name = document.createElement("h2");
        name.style.color = "white";
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = "View Recipe";
        name.innerText = e.strMeal;
        itemMenu.appendChild(image);
        itemMenu.appendChild(name);
        item.appendChild(itemMenu);
        itemMenu.appendChild(btn);

        btn.addEventListener("click", (list) => {
          let newqurey = document.querySelectorAll(".item_menu");
          for (let k = 5; k < newqurey.length; k++) {
            newqurey[k].style.display = "none";
          }

          //   console.log("This is list item: ", list);
          console.log("Clicked");

          let ingredientCount = Object.keys(e).filter(
            (key) => key.startsWith("strIngredient") && e[key]
          ).length;

          let newItem = document.querySelector(".item");

          newItem.style.display = "flex";
          newItem.style.flexDirection = "column";
          // newItem.style.justfyContent = "start";
          // newItem.style.alignItems = "start";
          newItem.style.color = "white";

          let html = "";
          for (let i = 1; i <= ingredientCount; i++) {
            const ingredient = e[`strIngredient${i}`];
            const measure = e[`strMeasure${i}`];

            html += `${ingredient} = ${measure} <br>`;
          }

          newItem.innerHTML = `
            <div class="item_menu detail-view">
              <h1 class="meal-title">${e.strMeal}</h1>
              <img src="${e.strMealThumb}" alt="${e.strMeal}" class="meal-image">
              <div class="meal-ingredients">
                <h3><em>Item’s List:</em></h3>
                <p>${html}</p>
              </div>
              <div class="meal-instruction">
                <h3><em>Instructions:</em></h3>
                <p>${e.strInstructions}</p>
              </div>
            </div>
          `;
        });
      });
    }
  });
}

function reset() {
  location.reload();
}
