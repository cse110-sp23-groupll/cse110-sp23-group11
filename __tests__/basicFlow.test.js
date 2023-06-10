describe('Basic user flow of website', () => {
    // First, visit the welcome page
    beforeAll(async () => {
        await page.goto('https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/welcome.html');
        await page.reload();
    });

    // Check to make sure that clicking 'START READING' takes you to the next page
    it('Clicking \'START READING\' it should go to the next page', async () => {
        console.log('Clicking the button...'); 
        /*
        await page.evaluate(() => {
            document.querySelector('#section1 > button:nth-child(3) > a:nth-child(1)').click(); 
        }); */
        await Promise.all([
            page.$eval('#section1 > button:nth-child(3) > a:nth-child(1)', element =>
              element.click()
            ),
            await page.waitForNavigation(),
        ]);
        //await page.waitForNavigation();
        const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/card-page.html";
        const buttonClicked = await page.url();
        console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
        expect(buttonClicked).toEqual(url);  
    
    }, 5000);

    // Check to make sure all cards are not flipped
    it('Checking all cards to make sure they are not flipped', async () => {
        console.log('Checking all cards...'); 
        const numCards = await page.evaluate(() => {
            const cards = document.querySelectorAll('.card');
            return cards.length;
        });  

        expect(numCards).toBe(22);
    }, 5000);

    let cardSrc1;
    let cardSrc2;
    let cardSrc3;

    // Click on first card, ensure it flips
    it('Clicking first card should flip it', async () => {
        console.log('Clicking the card...'); 
        const src = await page.evaluate(() => {
            document.querySelector('div.row:nth-child(5) > div:nth-child(4) > img:nth-child(1)').click();
            const firstCardImg = document.querySelector('div.row:nth-child(5) > div:nth-child(4) > img:nth-child(2)');
            return firstCardImg.getAttribute('src');
        });
        const cardClicked = await page.evaluate(() => {
            return !!document.querySelector('.flipped') 
        });
        cardSrc1 = src.substring(27);
        console.log('This is the img: ', cardSrc1);
        expect(cardClicked).toEqual(true);    
    }, 5000);

    // Click on second card, ensure it flips
    it('Clicking a second card should flip it', async () => {
        console.log('Clicking the card...'); 
        const src = await page.evaluate(() => {
            document.querySelector('div.row:nth-child(6) > div:nth-child(2) > img:nth-child(1)').click();
            const secondCardImg = document.querySelector('div.row:nth-child(6) > div:nth-child(2) > img:nth-child(2)');
            return secondCardImg.getAttribute('src');
        });
        const cardClicked = await page.evaluate(() => {
            return !!document.querySelector('.flipped') 
        });
        cardSrc2 = src.substring(27);
        console.log('This is the img: ', cardSrc2);
        expect(cardClicked).toEqual(true);    
    }, 5000);

    // Click on third card, ensure it flips and pop-up appears
    it('Clicking a third card should flip it and should move to next page', async () => {
        console.log('Clicking the card...'); 
        const src = await page.evaluate(() => {
            document.querySelector('div.row:nth-child(5) > div:nth-child(5) > img:nth-child(1)').click();
            const secondCardImg = document.querySelector('div.row:nth-child(5) > div:nth-child(5) > img:nth-child(2)');
            return secondCardImg.getAttribute('src');
        });
        cardSrc3 = src.substring(27);
        console.log('This is the img: ', cardSrc3);
        await page.waitForNavigation();
        const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/interpretation.html";
        const buttonClicked = await page.url();
        console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
        expect(buttonClicked).toEqual(url);  
    }, 7500);

    // On the Interpretation page, ensure that the cards selected are the ones shown
    it('Check the 3 cards are the same chosen', async () => {
        console.log('Checking first card...'); 
        const src1 = await page.evaluate(() => {
            const firstCardImg = document.querySelector('div.card:nth-child(1) > div:nth-child(1) > img:nth-child(1)');
            return firstCardImg.getAttribute('src');
        });
        console.log('This is the first img: ', src1.substring(25));
        expect(cardSrc1).toEqual(src1.substring(25));  

        const src2 = await page.evaluate(() => {
            const secondCardImg = document.querySelector('div.card:nth-child(2) > div:nth-child(1) > img:nth-child(1)');
            return secondCardImg.getAttribute('src');
        });
        console.log('This is the second img: ', src2.substring(25));
        expect(cardSrc2).toEqual(src2.substring(25));  

        const src3 = await page.evaluate(() => {
            const thirdCardImg = document.querySelector('div.card:nth-child(3) > div:nth-child(1) > img:nth-child(1)');
            return thirdCardImg.getAttribute('src');
        });
        console.log('This is the third img: ', src3.substring(25));
        expect(cardSrc3).toEqual(src3.substring(25));  
    }, 5000);

    // Click each card, make sure it flips over
    it('Check to make sure each card flips over', async () => {
        console.log('Clicking first card...'); 
        const class1 = await page.evaluate(() => {
            document.querySelector('div.card:nth-child(1) > div:nth-child(1) > img:nth-child(1)').click();
            const firstCard = document.querySelector('div.card:nth-child(1)');
            return firstCard.getAttribute('class');
        });
        expect(class1).toEqual('card now is-flipped')

        console.log('Clicking second card...'); 
        const class2 = await page.evaluate(() => {
            document.querySelector('div.card:nth-child(2) > div:nth-child(1) > img:nth-child(1)').click()
            const secondCard = document.querySelector('div.card:nth-child(2)');
            return secondCard.getAttribute('class');
        });
        expect(class2).toEqual('card future is-flipped')

        console.log('Clicking third card...'); 
        const class3 = await page.evaluate(() => {
            document.querySelector('div.card:nth-child(3) > div:nth-child(1) > img:nth-child(1)').click();
            const thirdCard = document.querySelector('div.card:nth-child(3)');
            return thirdCard.getAttribute('class');
        });
        expect(class3).toEqual('card past is-flipped')
    }, 5000);

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

    // Make sure new reading button works
    it('Clicking \'New Reading\' goes to first page', async () => {
        console.log('THIS IS THE LINK BEFORE PRESSING EXIT: ', await page.url());
        console.log('Clicking the button...'); 
        /*
        await page.evaluate(() => {
            document.querySelector('.newReading > a:nth-child(1) > p:nth-child(1)').click(); 
        }); */
        await Promise.all([
            page.$eval('.newReading > a:nth-child(1) > p:nth-child(1)', element =>
              element.click()
            ),
            await page.waitForNavigation(),
        ]);
        //await page.waitForNavigation();
        const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/card-page.html";
        const buttonClicked = await page.url();
        console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
        expect(buttonClicked).toEqual(url);  
    }, 5000);

    // This will run the entire thing again to make sure it works one second attempt

    // Check to make sure all cards are not flipped
    it('Checking all cards to make sure they are not flipped', async () => {
        await page.reload();
        console.log('Checking all cards...'); 
        const numCards = await page.evaluate(() => {
            const cards = document.querySelectorAll('.card');
            return cards.length;
        });  

        expect(numCards).toBe(22);
    }, 5000);

    // Click on first card, ensure it flips
    it('Clicking first card should flip it', async () => {
        console.log('Clicking the card...'); 
        const src = await page.evaluate(() => {
            document.querySelector('div.row:nth-child(5) > div:nth-child(4) > img:nth-child(1)').click();
            const firstCardImg = document.querySelector('div.row:nth-child(5) > div:nth-child(4) > img:nth-child(2)');
            return firstCardImg.getAttribute('src');
        });
        const cardClicked = await page.evaluate(() => {
            return !!document.querySelector('.flipped') 
        });
        cardSrc1 = src.substring(27);
        console.log('This is the img: ', cardSrc1);
        expect(cardClicked).toEqual(true);    
    }, 5000);

    // Click on second card, ensure it flips
    it('Clicking a second card should flip it', async () => {
        console.log('Clicking the card...'); 
        const src = await page.evaluate(() => {
            document.querySelector('div.row:nth-child(6) > div:nth-child(2) > img:nth-child(1)').click();
            const secondCardImg = document.querySelector('div.row:nth-child(6) > div:nth-child(2) > img:nth-child(2)');
            return secondCardImg.getAttribute('src');
        });
        const cardClicked = await page.evaluate(() => {
            return !!document.querySelector('.flipped') 
        });
        cardSrc2 = src.substring(27);
        console.log('This is the img: ', cardSrc2);
        expect(cardClicked).toEqual(true);    
    }, 5000);

    // Click on third card, ensure it flips and pop-up appears
    it('Clicking a third card should flip it and should move to next page', async () => {
        console.log('Clicking the card...'); 
        const src = await page.evaluate(() => {
            document.querySelector('div.row:nth-child(5) > div:nth-child(5) > img:nth-child(1)').click();
            const secondCardImg = document.querySelector('div.row:nth-child(5) > div:nth-child(5) > img:nth-child(2)');
            return secondCardImg.getAttribute('src');
        });
        cardSrc3 = src.substring(27);
        console.log('This is the img: ', cardSrc3);
        await page.waitForNavigation();
        const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/interpretation.html";
        const buttonClicked = await page.url();
        console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
        expect(buttonClicked).toEqual(url);  
    }, 7500);

    // On the Interpretation page, ensure that the cards selected are the ones shown
    it('Check the 3 cards are the same chosen', async () => {
        console.log('Checking first card...'); 
        const src1 = await page.evaluate(() => {
            const firstCardImg = document.querySelector('div.card:nth-child(1) > div:nth-child(1) > img:nth-child(1)');
            return firstCardImg.getAttribute('src');
        });
        console.log('This is the first img: ', src1.substring(25));
        expect(cardSrc1).toEqual(src1.substring(25));  

        const src2 = await page.evaluate(() => {
            const secondCardImg = document.querySelector('div.card:nth-child(2) > div:nth-child(1) > img:nth-child(1)');
            return secondCardImg.getAttribute('src');
        });
        console.log('This is the second img: ', src2.substring(25));
        expect(cardSrc2).toEqual(src2.substring(25));  

        const src3 = await page.evaluate(() => {
            const thirdCardImg = document.querySelector('div.card:nth-child(3) > div:nth-child(1) > img:nth-child(1)');
            return thirdCardImg.getAttribute('src');
        });
        console.log('This is the third img: ', src3.substring(25));
        expect(cardSrc3).toEqual(src3.substring(25));  
    }, 5000);

    // Click each card, make sure it flips over
    it('Check to make sure each card flips over', async () => {
        console.log('Clicking first card...'); 
        const class1 = await page.evaluate(() => {
            document.querySelector('div.card:nth-child(1) > div:nth-child(1) > img:nth-child(1)').click();
            const firstCard = document.querySelector('div.card:nth-child(1)');
            return firstCard.getAttribute('class');
        });
        expect(class1).toEqual('card now is-flipped')

        console.log('Clicking second card...'); 
        const class2 = await page.evaluate(() => {
            document.querySelector('div.card:nth-child(2) > div:nth-child(1) > img:nth-child(1)').click()
            const secondCard = document.querySelector('div.card:nth-child(2)');
            return secondCard.getAttribute('class');
        });
        expect(class2).toEqual('card future is-flipped')

        console.log('Clicking third card...'); 
        const class3 = await page.evaluate(() => {
            document.querySelector('div.card:nth-child(3) > div:nth-child(1) > img:nth-child(1)').click();
            const thirdCard = document.querySelector('div.card:nth-child(3)');
            return thirdCard.getAttribute('class');
        });
        expect(class3).toEqual('card past is-flipped')
    }, 5000);

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

    // Check to make sure that clicking 'EXIT' takes the user to the start page
    it('Clicking \'EXIT\' goes to first page', async () => {
        console.log('THIS IS THE LINK BEFORE PRESSING EXIT: ', await page.url());
        console.log('Clicking the button...'); 
        /*
        await page.evaluate(() => {
            document.querySelector('.exit > a:nth-child(1) > p:nth-child(1)').click(); 
        }); */
        await Promise.all([
            page.$eval('.exit > a:nth-child(1) > p:nth-child(1)', element =>
              element.click()
            ),
            await page.waitForNavigation(),
        ]);
        //await page.waitForNavigation();
        const url = "https://cse110-sp23-groupll.github.io/cse110-sp23-group11/source/welcome.html";
        const buttonClicked = await page.url();
        console.log('THIS IS THE CURRENT LINK: ', buttonClicked);
        expect(buttonClicked).toEqual(url);  
    
    }, 5000);
});