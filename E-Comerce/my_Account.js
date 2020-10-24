import page from './pageModel';

let rndNumber = Math.random().toString(36).substr(1,4);
const email =  `dummy${rndNumber}@mailinator.com`;
const firstName = 'Joaquin';
const lastName = 'Quintero';
const password = '88888';

fixture('Testing my account module')
    .page('http://automationpractice.com/index.php');

test('Create an account', async t =>{
    await t 
        .click(page.signIn_Link)
        console.log(`Generated email: ${email}`);
    
    await t
        .typeText(page.email_Input, email)
        .expect(page.email_Input.value).contains(email)
        .click(page.btn_createAcount)
    
    await t
        .expect(page.email_form.value).contains(email)
        .typeText(page.firstName_Input, firstName)
        .typeText(page.lastName_Input, lastName)

        .expect(page.firstName_Address.value).contains(firstName)
        .expect(page.lastName_Address.value).contains(lastName)

        .typeText(page.password_form, password)
        .typeText(page.address_Input, 'PO BOX 1')


});
test('Login with new account', async t =>{});
test('Logout', async t =>{});
test('Create new account with existing data', async t =>{});
test('Validate forgot password with valid email', async t =>{});
test('Validate forgot password with non valid email', async t =>{});
test('Update account information', async t =>{});