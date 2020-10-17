import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Second practice with testcafe')
    .page('https://the-internet.herokuapp.com/');

    test('Click on link', async t =>{
        await t 
            .click(page.AB_Link)
        await t
            //.expect(page.text21.exists).ok();
            //.expect(page.text21.innerText).contains('A/B Test Variation 1');
            if(page.AB_H3.innerText === 'A/B Test Variation 1' || 'A/B Testing' || 'A/B Test Variation'){
                console.log('Test aprooved');
                console.log(page.AB_H3.innerText);
            }else{
                console.log('Test failed');
                console.log(page.AB_H3.innerText);
            }
    });