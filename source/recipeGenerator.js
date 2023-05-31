window.addEventListener('DOMContentLoaded', init);

// Save data of recipes from given JSON file to localstorage
const saveRecipesToStorage = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

const randomNumberGenerator = ()=> {
    return Math.floor(Math.random() * 100);
}

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
 *  @returns {Array<Object>}
**/
// returns random recipe from localstorage recipes data
function getRecipeFromStorage() {
    const localRecipes = JSON.parse(localStorage.getItem('recipes'));
    const randomizedIdx = randomNumberGenerator();
    const recipe = localRecipes[randomizedIdx]
    return recipe
}

/**
 * string for queryselector
 * @param {String} button //for recipe generate button
 * @param {String} recipeContainer//for recipe container
 */
// generate randomize recipe when click the button
function GenerateButtonHandler(button, recipeContainer) {
    const main = document.querySelector(recipeContainer);
    const btn = document.querySelector(button);
    const recipeArticle = document.createElement('custom-recipe');
    btn.addEventListener('click', async () => {
        const recipeData = await getRecipeFromStorage();
        recipeArticle.data = recipeData;
        main.appendChild(recipeArticle);
    });
}