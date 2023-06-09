describe('Testing Interpretation Page', () => {
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
      await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/interpretation.html');
      console.log('THIS IS THE LINK BEFORE PRESSING EXIT: ', await page.url());
      console.log('Clicking the button...'); 
      await page.evaluate(() => {
        document.querySelector('body > header > button > a').click(); 
      }); 
      await page.waitForNavigation();
      const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/welcome.html";
      const buttonClicked = await page.url();
      console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
      expect(buttonClicked).toEqual(url);  
  
    }, 5000);
});