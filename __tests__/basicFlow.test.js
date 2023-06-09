describe('Basic user flow of website', () => {
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
        console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
        expect(buttonClicked).toEqual(url);  
    
    }, 5000);

    // Click on first card, ensure it flips
    it('Clicking first card should flip it', async () => {
        console.log('Clicking the card...'); 
        await page.evaluate(() => {
            document.querySelector('div.row:nth-child(5) > div:nth-child(4) > img:nth-child(1)').click(); 
        }); 
        const cardClicked = await page.evaluate(() => {
            return !!document.querySelector('.flipped') 
        });
        expect(cardClicked).toEqual(true);    
    }, 5000);

    // Click on second card, ensure it flips
    it('Clicking a second card should flip it', async () => {
        console.log('Clicking the card...'); 
        await page.evaluate(() => {
            document.querySelector('div.row:nth-child(6) > div:nth-child(2) > img:nth-child(1)').click(); 
        }); 
        const cardClicked = await page.evaluate(() => {
            return !!document.querySelector('.flipped') 
        });
        expect(cardClicked).toEqual(true);    
    }, 5000);

    // Click on third card, ensure it flips and pop-up appears
    it('Clicking a third card should flip it and should move to next page', async () => {
        console.log('Clicking the card...'); 
        await page.evaluate(() => {
            document.querySelector('div.row:nth-child(7) > div:nth-child(2) > img:nth-child(1)').click(); 
        }); 
        
        await page.waitForNavigation();
        const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/interpretation.html";
        const buttonClicked = await page.url();
        console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
        expect(buttonClicked).toEqual(url);  
    }, 5000);
});