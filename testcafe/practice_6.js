import page from './pageModel';

fixture('Practice 6 with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Test with add and remove elements', async t =>{
        await t
            .click(page.add_remove_Link)

        await t
            .click(page.add_Btn)
        
        await t
            .click(page.remove_Btn.nth(0))
    });

