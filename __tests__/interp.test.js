describe('Basic user flow for Website', () => {
    // First, visit the interpretation page
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5502/interpretation.html');
    });

    // Check to make sure that the 'recipes' button extends the page
    it('Clicking the "RECIPE" button should extend the page', async () => {
      let txt = "RECIPE CONTENT";
      console.log('Checking the "RECIPE" button...');
      // finds button and clicks it
      await page.$eval( '#expand-btn', form => form.click() );
      // finds the text of the page that is extended
      await page.waitForSelector('#content')
      let content = await page.$('#content')
      let textContent = await page.evaluate(cont => cont.textContent, content)
      expect(textContent).toBe(txt);
    }, 2500);
});