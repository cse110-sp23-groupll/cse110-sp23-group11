describe('Testing Card Page', () => {
    // First, visit the card page
    beforeAll(async () => {
      await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/card-page.html');
    });
  
    // Check to make sure that clicking 'EXIT' takes the user to the start page
    it('Clicking \'EXIT\' goes to first page', async () => {
      console.log('Clicking the button...'); 
      try {
        await page.$('body > header > nav > a')
        // Does exist
      } catch {
        // Does not
        console.log('ELEMENT NOT FOUND?');
      }
      await page.evaluate(() => {
        document.querySelector('body > header > nav > a').click(); 
      }); 
      await page.waitForNavigation();
      const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/welcome.html";
      const buttonClicked = await page.url();
      expect(buttonClicked).toEqual(url);  
  
    }, 5000);
  });
