describe('Basic user flow for Website', () => {
    // First, visit the interpretation page
    beforeAll(async () => {
      await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/interpretation.html');
    });

    // Check to make sure that the 'recipes' button extends the page
    it('Clicking the "RECIPE" button should extend the page', async () => {
      let txt = "Yes";
      console.log('Checking the "RECIPE" button...');
      try {
        await page.waitForSelector('#content')
      } catch (error) {
        txt = "No"
      }
      expect(txt).toBe("Yes")
    }, 2500);

    // Check to make sure that clicking on the cards flips it
    it('Clicking each card should flip it', async () => {
      console.log('Checking the first card...');
      await page.click('div.card:nth-child(1) > div:nth-child(1)');
      const cardClicked1 = await page.evaluate(() => {
        return !!document.querySelector('div.card.now.is-flipped') 
      });

      console.log('Checking the second card...');
      await page.click('body > main > div.red > div.card-container > div.card.future');  
      const cardClicked2 = await page.evaluate(() => {
        return !!document.querySelector('div.card.future.is-flipped')
      });

      console.log('Checking the last card...');
      await page.click('body > main > div.red > div.card-container > div.card.past');
      const cardClicked3 = await page.evaluate(() => {
        return !!document.querySelector('div.card.past.is-flipped') 
      });
      expect(cardClicked1).toBe(true);
      expect(cardClicked2).toBe(true);
      expect(cardClicked3).toBe(true);
    }, 2500);

    // Check to make sure that clicking 'New Reaading' takes the user to the right page
    it('Clicking \'New Reading\' goes to second page', async () => {
      console.log('Clicking the button...');
      await page.evaluate(() => {
        document.querySelector('body > main > div.red > div.container > button > a').click();
      });
      await page.waitForNavigation();
      const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/card-page.html";
      const buttonClicked = await page.url();
      expect(buttonClicked).toEqual(url);  

    }, 5000);

    // Check to make sure that clicking 'EXIT' takes the user to the start page
    it('Clicking \'EXIT\' goes to first page', async () => {
      console.log('Clicking the button...'); 
      await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/interpretation.html');
      await page.evaluate(() => {
        document.querySelector('body > header > button > a').click(); 
      }); 
      await page.waitForNavigation();
      const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/welcome.html";
      const buttonClicked = await page.url();
      expect(buttonClicked).toEqual(url);  
  
    }, 5000);
});