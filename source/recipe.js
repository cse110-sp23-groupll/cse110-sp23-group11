window.addEventListener('DOMContentLoaded', init);

const saveRecipesToStorage = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }


const randomNumberGenerator = ()=> {
    return Math.floor(Math.random() * 100);
}

function init(){
    fetch("./recipes.json").then(response => {
   return response.json();
    })
    .then(jsonData => {
        saveRecipesToStorage(jsonData);
    }).then(() => {
        GenerateButtonHandler();
    }).catch(error => {
        console.log("Error fetching recipes:", error);
    });
}

function RandomRecipeFromStorage() {
    const localRecipes = JSON.parse(localStorage.getItem('recipes'));
    const randomizedIdx = randomNumberGenerator();
    console.log(localRecipes[randomizedIdx]);
    return localRecipes[randomizedIdx]
}

function GenerateButtonHandler(){
    const button = document.querySelector('.button')
    const textArea = document.querySelector('.recipe')
    button.addEventListener('click', () => {
        const recipe = RandomRecipeFromStorage();
        textArea.innerHTML = JSON.stringify(recipe)
    });
}