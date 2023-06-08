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
    it('Clicking a third card should flip it and pop-up should apoear', async () => {
        console.log('Clicking the card...'); 
        await page.evaluate(() => {
            document.querySelector('div.row:nth-child(7) > div:nth-child(2) > img:nth-child(1)').click(); 
        }); 
        const cardClicked = await page.evaluate(() => {
            return !!document.querySelector('.flipped') 
        });
        expect(cardClicked).toEqual(true);    

        // press escape on pop-up
        await page.keyboard.press('Escape');

        // count how many cards are there (should be all 22)
        const cnt = (await page.$$('div.card')).length;

        expect(cnt).toEqual(22);
    }, 5000);

    // Click on shuffle should flip all cards again
    /*
    it('Clicking shuffle button should flip over any clicked cards', async () => {
        console.log('Clicking the cards...'); 
        await page.evaluate(() => {
            document.querySelector('div.row:nth-child(4) > div:nth-child(1) > img:nth-child(1)').click(); 
        }); 
        await page.evaluate(() => {
            document.querySelector('div.row:nth-child(3) > div:nth-child(3) > img:nth-child(1)').click(); 
        }); 

        const clicked = (await page.$$('div.card.flipped')).length;

        // check to make sure the 2 cards were flipped
        expect(clicked).toEqual(2);

        // click on shuffle button and there should be all 22 cards reset
        await page.evaluate(() => {
            document.querySelector('#shuffleButton').click(); 
        }); 

        const cnt = (await page.$$('div.card')).length;

        expect(cnt).toEqual(22);
    }, 5000); */
});