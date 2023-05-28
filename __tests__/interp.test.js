describe('Basic user flow for Website', () => {
    // First, visit the interpretation page
    beforeAll(async () => {
      await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/interpretation.html');
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

    // Check to make sure that clicking on the cards flips it THIS IS NOT WORKING
    it('Clicking each card should flip it', async () => {
      console.log('Checking the first card...');
      await page.click('div.card:nth-child(1) > div:nth-child(1)');
      const cardClicked = await page.evaluate(() => {
        return !!document.querySelector('div.card.now.is-flipped') 
      });
      expect(cardClicked).toBe(true);
    }, 2500);
});