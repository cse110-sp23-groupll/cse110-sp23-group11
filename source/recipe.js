class Recipe extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
      const article = document.createElement('article');
      const style = document.createElement('style');
      // put any custom style css for article of recipe
      style.textContent = `
      .recipe-container {
        background-color: #f7f7f7;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      
      .name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333;
      }
      
      .author {
        font-style: italic;
        color: #777;
        margin-bottom: 15px;
      }
      
      .url {
        margin-bottom: 15px;
      }
      
      .url a {
        color: #1835d0;
        text-decoration: none;
      }
      
      .url a:hover {
        text-decoration: underline;
      }
      
      .ingredients-title,
      .method-title {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
      }
      
      .ingredients,
      .method {
        margin-bottom: 10px;
        color: #555;
      }
      
      .ingredient-item,
      .method-step {
        margin-bottom: 5px;
        list-style-type: disc;
      }
      
      .recipe-container p {
        margin: 0;
      }      
      `;
  
      shadow.appendChild(style);
      shadow.appendChild(article);
    }
  
    /**
     * Called when the .data property is set on this element.
     * @param {Object} data - The data to pass into the <recipe>, must be of the
     *                        following format:
     *                        {
     *                          "Author": "string",
     *                          "Description": "string",
     *                          "url": "string",
     *                          "Ingredients": "Array{string}",
     *                          "Method": "Array{string}",
     *                          "Name" : "string"
     *                        }
     */
    set data(data) {
      // If nothing was passed in, return
      if (!data) return;
  
      const article = this.shadowRoot.querySelector('article');
      article.innerHTML = `
      <p class="name">
      ${data.Name}
    </p>
    <p class="author">${data.Author}</p>
    <p class="url">
      <a href=${data.url}>${data.url}</a>
    </p>
    <p class="ingredients">
      <strong>Ingredients</strong>
      <ul>
        ${data.Ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
    </p>
    <p class="method">
      <strong>Method</strong>
      <ol>
        ${data.Method.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </p>
    `;
    }
  }

  customElements.define('custom-recipe', Recipe);