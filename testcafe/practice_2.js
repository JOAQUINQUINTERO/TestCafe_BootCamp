import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Second practice with testcafe')
    .page('https://the-internet.herokuapp.com/');

    test('Click on link', async t =>{
        await t 
            .click(page.AB_Link)
        await t

            if(page.AB_H3.innerText === "HI"){
                console.log('Test aprooved');
                console.log(page.AB_H3.innerText);
            } else {
                console.log('The text does not match what is expected');
                console.log(page.AB_H3.innerText);
                await t
                    .expect (page.AB_H3.innerText).contains("A/B Test Control" || "A/B Test Variation 1")
                    console.log(page.AB_H3.innerText);
            } 
    });