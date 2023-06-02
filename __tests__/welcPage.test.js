describe('Testing Welcome Page', () => {
    // First, visit the welcome page
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5500/source/welcome.html');
    });

    // Check to make sure that clicking 'START READING' takes you to the next page
    it('Clicking \'START READING\' it should go to the next page', async () => {
        console.log('Clicking the button...'); 
        await page.evaluate(() => {
            document.querySelector('#section1 > button:nth-child(3) > a:nth-child(1)').click(); 
        }); 
        await page.waitForNavigation();
        const url = "http://127.0.0.1:5500/source/card-page.html";
        const buttonClicked = await page.url();
        console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
        expect(buttonClicked).toEqual(url);  
    
    }, 5000);
});