describe('Basic user flow for Website', () => {
    // First, visit the welcome page
    beforeAll(async () => {
      await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/welcome.html');
    });

    // Check to make sure that clicking 'START READING' takes you to the next page
    it('Clicking \'START READING\' it should go to the next page', async () => {
        console.log('Clicking the button...'); 
        await page.evaluate(() => {
            document.querySelector('#section1 > button:nth-child(3) > a:nth-child(1)').click(); 
        }); 
        await page.waitForNavigation();
        const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/card-page.html";
        const buttonClicked = await page.url();
        expect(buttonClicked).toEqual(url);  
    
    }, 5000);

    
});