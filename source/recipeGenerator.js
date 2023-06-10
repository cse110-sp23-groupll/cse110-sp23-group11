window.addEventListener('DOMContentLoaded', init);

// Save data of recipes from given JSON file to localstorage
const saveRecipesToStorage = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

const randomNumberGenerator = ()=> {
    return Math.floor(Math.random() * 100);
}

// save recipes.json to local storage and add event listener to expand button
function init(){
    // you may change the variable below (button, recipeContainer) to fit html file
    const button = '#expand-btn' // selector for recipe generate button
    const recipeContainer = '.recipe-content'

    fetch("./recipes.json").then(response => {
    return response.json();
    })
    .then(jsonData => {
        saveRecipesToStorage(jsonData);
    }).then(() => {
        GenerateButtonHandler(button, recipeContainer);
    }).catch(error => {
        console.log("Error fetching recipes:", error);
    });
}


/**
 *  @param {int} index index of recipe in localStorage (recipes.json), It would be randomized index
 *  @returns {Array<Object>} recipe from localstorage of given index
**/
// returns recipe from localstorage recipes data
function getRecipeFromStorage(index) {
    const localRecipes = JSON.parse(localStorage.getItem('recipes'));
    const recipe = localRecipes[index]
    return recipe
}

/**
 * string for queryselector
 * @param {String} button //for recipe generate button
 * @param {String} recipeContainer//for recipe container
 */

// generate randomize recipe when click the button (per page refresh)
function GenerateButtonHandler(button, recipeContainer) {
    const main = document.querySelector(recipeContainer);
    const btn = document.querySelector(button);
    //const randomizedIdx = randomNumberGenerator();
    const randomizedIdx = parseInt(localStorage.getItem('recipeIndex'));
    const recipeArticle = document.createElement('custom-recipe');
    btn.addEventListener('click', async () => {
        const recipeData = await getRecipeFromStorage(randomizedIdx);
        recipeArticle.data = recipeData;
        main.appendChild(recipeArticle);
    });
}