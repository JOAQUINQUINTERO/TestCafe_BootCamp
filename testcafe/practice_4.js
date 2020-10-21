import page from './pageModel';

fixture('Practice 4 with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Test Checkboxes and not Selected', async t =>{
        await t
            .click(page.checkboxes_Link)

        await t
            .click(page.checkBoxes_Form.nth(1))
        
        await t
            .expect(page.checkBoxes_Form.nth(0).checked).notOk()
            .expect(page.checkBoxes_Form.nth(1).checked).notOk()
    });

    test('Test Checkboxes and Selected', async t =>{
        await t
            .click(page.checkboxes_Link)

        await t
            .click(page.checkBoxes_Form.nth(0))
        
        await t
            .expect(page.checkBoxes_Form.nth(0).checked).ok()
            .expect(page.checkBoxes_Form.nth(1).checked).ok()
    });
