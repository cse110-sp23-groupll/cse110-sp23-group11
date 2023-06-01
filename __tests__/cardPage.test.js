describe('Basic user flow for Website', () => {
    // First, visit the interpretation page
    beforeAll(async () => {
      await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/card-page.html');
    });
  
    // Check to make sure that clicking 'EXIT' takes the user to the start page
    it('Clicking \'EXIT\' goes to first page', async () => {
      console.log('Clicking the button...'); 
      await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/card-page.html');
      await page.evaluate(() => {
        document.querySelector('body > header > nav > a').click(); 
      }); 
      await page.waitForNavigation();
      const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/welcome.html";
      const buttonClicked = await page.url();
      expect(buttonClicked).toEqual(url);  
  
    }, 5000);
  });
