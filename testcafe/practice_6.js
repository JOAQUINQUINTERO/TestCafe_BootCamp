import page from './pageModel';

fixture('Practice 6 with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Test with add and remove elements with parent selector', async t =>{
        await t
            .click(page.add_remove_Link)

        await t
            .expect(page.add_Btn.visible).ok()
            .click(page.add_Btn)
            .click(page.add_Btn)
            .click(page.add_Btn)

        
        await t
            .expect(page.remove_Btn.nth(1).visible).ok()
            .expect(page.remove_Btn.nth(2).visible).ok()
            .expect(page.remove_Btn.nth(3).visible).ok()
    });

    test('Test with add and remove elements with parent selector', async t =>{
        await t
            .click(page.add_remove_Link)

        await t
            .click(page.add_Btn)
            .click(page.add_Btn)
            .click(page.add_Btn)

        
        await t
            .click(page.remove_Btn.nth(1))
            .click(page.remove_Btn.nth(2))
            .click(page.remove_Btn.nth(3))
    });

