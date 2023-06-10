const { JSDOM } = require('jsdom');
const puppeteer = require('puppeteer');

global.window = new JSDOM().window;
global.document = window.document;
global.customElements = window.customElements;
global.HTMLElement = window.HTMLElement;

require('../source/recipe');

// check if our recipe.json file is uploaded in localstorage
describe('Testing Recipe Generator', () => {
    let browser, page;
    
    jest.setTimeout(50000); // increase timeout to 10 seconds
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/interpretation.html');
    });

    afterAll(async () => {
        await browser.close();
    });

    it('Check JSON data of recipe is uploaded to local storage', async () => {
        const localRecipes = await page.evaluate(() => {
        return JSON.parse(localStorage.getItem('recipes')) || [];
    });

    const jsonRecipes = require('../source/recipes.json');

    expect(localRecipes.length).toBeGreaterThan(0); // Check if localRecipes array is not empty
    expect(localRecipes).toEqual(expect.arrayContaining(jsonRecipes)); // Check if localRecipes and jsonRecipes are same
    }, 10000);
});

// check custom-recipe component is exist and correct
describe('Recipe Web Component Testing', () => {
    let el;

    beforeEach(() => {
        el = document.createElement('custom-recipe');
    });

    it('should be defined', () => {
        expect(customElements.get('custom-recipe')).toBeDefined();
    });

    it('should render correctly when data is set', () => {
    const data = {
        "Author": "Seonghun",
        "Description": "Delicious homemade spaghetti.",
        "url": "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/card-page.html",
        "Ingredients": [
            "200g spaghetti",
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "400g canned tomatoes",
            "Salt to taste",
            "Pepper to taste",
            "Parmesan cheese"
        ],
        "Method": [
            "Cook spaghetti according to package instructions.",
            "Heat oil in a pan and sauté onion and garlic until onion is translucent.",
            "Add tomatoes, salt, and pepper. Simmer for 15 minutes.",
            "Drain spaghetti and add to the pan. Toss until spaghetti is well coated with the sauce.",
            "Serve hot with a sprinkle of Parmesan cheese."
        ],
        "Name" : "Homemade Spaghetti"
    };
    el.data = data;

    expect(el.shadowRoot.querySelector('.name').textContent.trim()).toBe(data.Name);
    expect(el.shadowRoot.querySelector('.author').textContent.trim()).toBe(data.Author);
    expect(el.shadowRoot.querySelector('.url a').href).toBe(data.url);
    expect(el.shadowRoot.querySelector('.ingredients ul').textContent).toContain(data.Ingredients[0]);
    expect(el.shadowRoot.querySelector('.method ol').textContent).toContain(data.Method[0]);
    });
})

