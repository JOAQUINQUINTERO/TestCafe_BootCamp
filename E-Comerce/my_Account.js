import page from './pageModel';
import { data, rndNumber } from './data';

fixture('Testing my account module')
    .page('http://automationpractice.com/index.php');

test('Create an account', async t =>{
    await t 
        .click(page.signIn_Link)
        console.log(`Generated email: ${data.email} ${rndNumber}`);
    
    await t
        .typeText(page.email_Input, data.email)
        .expect(page.email_Input.value).contains(data.email)
        .takeElementScreenshot(page.btn_createAcount)
        .takeScreenshot()
        .click(page.btn_createAcount)
        
        //.debug()
    
    await t
        .expect(page.email_form.value).contains(data.email)
        .typeText(page.firstName_Input, data.firstName)
        .typeText(page.lastName_Input, data.lastName)

        .expect(page.firstName_Address.value).contains(data.firstName)
        .expect(page.lastName_Address.value).contains(data.lastName)

        .typeText(page.password_form, data.password)

        .typeText(page.address_Input, data.poBox)
        .expect(page.address_Input.value).contains(data.poBox)
        .typeText(page.city_Input, data.city)
        .expect(page.city_Input.value).contains(data.city)
        .click(page.state_Select)
        .click(page.state_Select_opt.nth(4))
        .typeText(page.post_code_Input, data.postCode)
        .typeText(page.phone_Input, data.phone)
        .expect(page.post_code_Input.value).contains(data.postCode)
        .click(page.country_Select)
        .click(page.country_Select_opt.nth(1))
        .click(page.btn_Submit)
        //.expect(page.adressAlias.value).contains(data.poBox)

});
test('Login with new account', async t =>{});
test('Logout', async t =>{});
test('Create new account with existing data', async t =>{});
test('Validate forgot password with valid email', async t =>{});
test('Validate forgot password with non valid email', async t =>{});
test('Update account information', async t =>{});