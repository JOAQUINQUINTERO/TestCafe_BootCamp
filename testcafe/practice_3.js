import page from './pageModel';

fixture('Third practice with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Verify input and button show correctly', async t => {
        await t 
            .click(page.forgot_Link)
        await t
            .expect(page.forgot_Input.exists).ok()
            .expect(page.forgot_Button_Submit.exists).ok();
    });

    test('Verify we can add value to forgot input', async t =>{
        await t
            .click(page.forgot_Link)

        await t
            .typeText(page.forgot_Input, 'john.doe@email.com')
            .expect(page.forgot_Input.value).eql('john.doe@email.com')
    });

    test('Verify email sends correctly', async t =>{
        await t
            .click(page.forgot_Link)

        await t
            .typeText(page.forgot_Input, 'john.doe@email.com')
            .expect(page.forgot_Input.value).eql('john.doe@email.com')
            .click(page.forgot_Button_Submit)
        
        await t
            .expect(page.confirm_text.innerText).contains('sent','Succesfull Test')
    })
