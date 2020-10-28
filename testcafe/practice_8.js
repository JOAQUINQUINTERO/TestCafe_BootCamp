import page from './pageModel';
const user = 'tomsmith';
const password = 'SuperSecretPassword!';
const incorrect_User = 'tomsmith2';
fixture('Practice 8 with TestCafe with formy')
    .page('http://the-internet.herokuapp.com/');

    test('Testing Login', async t =>{
        await t
            .click(page.login_Link)

        await t
            .typeText(page.username_Input, user)
            .expect(page.username_Input.value).eql(user)
            .typeText(page.password_Input, password)
            .expect(page.password_Input.value).eql(password)
            .click(page.login_Btn)

        await t
            .expect(page.flash_Alert.innerText).contains('You logged into a secure area!')
            .expect(page.subHeaders.visible).ok()
    });

    test('Testing Incorrect Login', async t =>{
        await t
            .click(page.login_Link)

        await t
            .typeText(page.username_Input, incorrect_User)
            .expect(page.username_Input.value).eql(incorrect_User)
            .typeText(page.password_Input, password)
            .expect(page.password_Input.value).eql(password)
            .click(page.login_Btn)

        await t
            .expect(page.flash_Alert.innerText).contains('Your username is invalid!')
    });