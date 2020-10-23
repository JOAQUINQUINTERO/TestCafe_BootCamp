import page from './pageModel';

fixture('Practice 9 with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Test Key Press Input', async t =>{
        await t
            .click(page.key_press_Link)
        
        await t
            .pressKey('backspace')
            .wait(500)
        
        await t
            .pressKey('c')
            .wait(500)
            .expect(page.result_key_press.innerText).contains('You entered: C')
            .expect(page.result_key_press.innerText).notContains('You entered: BACK_SPACE')
        
        await t
            .pressKey('tab')
            .wait(500)
            .expect(page.result_key_press.innerText).contains('You entered: TAB')
            .pressKey('shift')
            .wait(500)
            .expect(page.result_key_press.innerText).contains('You entered: SHIFT')
            .pressKey('capslock')
            .wait(500)
            .expect(page.result_key_press.innerText).contains('You entered: CAPS_LOCK')
            .pressKey('up')
            .wait(500)
            .expect(page.result_key_press.innerText).contains('You entered: UP')
            .pressKey('enter')
            .wait(500)
            .expect(page.result_key_press.innerText).contains('You entered: ENTER')
    });

