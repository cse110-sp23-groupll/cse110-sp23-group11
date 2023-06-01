const { expect } = require('@jest/globals');
const { defineCE, fixture } = require('@open-wc/testing-helpers');
const Recipe = require('../source/recipe');

describe('Recipe', () => {
  let recipeElement;

  beforeEach(async () => {
    const RecipeElement = defineCE(class extends Recipe {});
    recipeElement = await fixture(`<${RecipeElement}></${RecipeElement}>`);
  });

  it('should set data on the recipe element', () => {
    const data = {
      Name: 'Test Recipe',
      Author: 'Seonghun',
      url: 'https://example.com',
      Ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
      Method: ['Step 1', 'Step 2', 'Step 3'],
    };

    recipeElement.data = data;

    const article = recipeElement.shadowRoot.querySelector('article');
    const nameElement = article.querySelector('.name');
    const authorElement = article.querySelector('.author');
    const urlElement = article.querySelector('.url');
    const ingredientsElement = article.querySelector('.ingredients');
    const methodElement = article.querySelector('.method');

    expect(nameElement.textContent).toBe(data.Name);
    expect(authorElement.textContent).toBe(data.Author);
    expect(urlElement.querySelector('a').getAttribute('href')).toBe(data.url);
    expect(ingredientsElement.querySelectorAll('li').length).toBe(data.Ingredients.length);
    expect(methodElement.querySelectorAll('li').length).toBe(data.Method.length);
  });

  it('should not set data when null is passed', () => {
    recipeElement.data = null;

    const article = recipeElement.shadowRoot.querySelector('article');
    const nameElement = article.querySelector('.name');
    const authorElement = article.querySelector('.author');
    const urlElement = article.querySelector('.url');
    const ingredientsElement = article.querySelector('.ingredients');
    const methodElement = article.querySelector('.method');

    expect(nameElement.textContent).toBe('');
    expect(authorElement.textContent).toBe('');
    expect(urlElement.querySelector('a')).toBeNull();
    expect(ingredientsElement.querySelectorAll('li').length).toBe(0);
    expect(methodElement.querySelectorAll('li').length).toBe(0);
  });
});
