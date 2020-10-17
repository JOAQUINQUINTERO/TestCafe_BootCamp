import page from './pageModel';

fixture('Practice 4 with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Test Checkboxes', async t =>{
        await t
            .click(page.checkboxes_Link)

        await t
            .click(page.checkBoxes_Form.nth(1))
        
        await t
            .expect(page.checkBoxes_Form.nth(1).checked).notOk()
            .expect(page.checkBoxes_Form.nth(3).checked).notOk()
    });
