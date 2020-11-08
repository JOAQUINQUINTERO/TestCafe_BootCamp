import page from "./pageModel";
import { data } from "./data";
import { errors } from "./constants";

fixture("Final Project account module").page(
  "http://automationpractice.com/index.php"
);

test("Create an account without Email", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .expect(page.btn_createAcount.visible)
    .ok()
    .click(page.btn_createAcount)
    .expect(page.errorsAccountEmail.innerText)
    .contains(errors.invalid_email);
});
test("Create account with invalid email format", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .expect(page.email_Input.visible)
    .ok()
    .typeText(page.email_Input, "135135143!@#514351@.com")
    .expect(page.btn_createAcount.visible)
    .ok()
    .click(page.btn_createAcount)
    .expect(page.errorsAccountEmail.innerText)
    .contains(errors.invalid_email);
});
test("Create account with email already registered", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .typeText(page.email_Input, "a@a.com")
    .expect(page.btn_createAcount.visible)
    .ok()
    .click(page.btn_createAcount)
    .expect(page.errorsAccountEmail.innerText)
    .contains(errors.exist_email);
});
test("Validate forgot password with invalid email", async (t) => {
  await t.click(page.signIn_Link);

  await t.click(page.forgot_link);

  await t
    .expect(page.email_form.visible)
    .ok()
    .typeText(page.email_form, data.email)
    .click(page.retrive_password_btn)
    .expect(page.errorsForgotPassword.innerText)
    .contains(errors.notRegistered_email);
});
test("Create an account and fill out form values", async (t) => {
  await t.click(page.signIn_Link);
  
  await t
    .typeText(page.email_Input, data.email)
    .expect(page.email_Input.value)
    .contains(data.email)
    .takeElementScreenshot(page.btn_createAcount)
    .takeScreenshot()
    .click(page.btn_createAcount);

  await t
    .expect(page.email_form.value)
    .contains(data.email)
    .typeText(page.firstName_Input, data.firstName)
    .typeText(page.lastName_Input, data.lastName)

    .expect(page.firstName_Address.value)
    .contains(data.firstName)
    .expect(page.lastName_Address.value)
    .contains(data.lastName)

    .typeText(page.password_form, data.password)

    .typeText(page.address_Input, data.poBox)
    .expect(page.address_Input.value)
    .contains(data.poBox)
    .typeText(page.city_Input, data.city)
    .expect(page.city_Input.value)
    .contains(data.city)
    .click(page.state_Select)
    .click(page.state_Select_opt.nth(4))
    .typeText(page.post_code_Input, data.postCode)
    .typeText(page.phone_Input, data.phone)
    .expect(page.post_code_Input.value)
    .contains(data.postCode)
    .click(page.country_Select)
    .click(page.country_Select_opt.nth(1))
    .click(page.btn_Submit);
});
test("Create an account and validate emtpy register form", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .typeText(page.email_Input, `_${data.email}`)
    .expect(page.email_Input.value)
    .contains(data.email)
    .click(page.btn_createAcount);

  await t
    .click(page.btn_Submit)
    .expect(page.register_Form.nth(0).innerText)
    .contains(errors.register_phone_required)
    .expect(page.register_Form.nth(1).innerText)
    .contains(errors.register_last_name_required)
    .expect(page.register_Form.nth(2).innerText)
    .contains(errors.register_first_name_required)
    .expect(page.register_Form.nth(3).innerText)
    .contains(errors.register_password_required)
    .expect(page.register_Form.nth(4).innerText)
    .contains(errors.register_address_required)
    .expect(page.register_Form.nth(5).innerText)
    .contains(errors.register_city_required)
    .expect(page.register_Form.nth(6).innerText)
    .contains(errors.register_zip_code_required)
    .expect(page.register_Form.nth(7).innerText)
    .contains(errors.register_country_required);
});
test("Validate sign-in empty form", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .expect(page.loginBtn.visible)
    .ok()
    .click(page.loginBtn)
    .expect(page.errrosSignIn.innerText)
    .contains(errors.required_email);
});
test("Validate sign-in form with valid email and empty password", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .expect(page.email_form.visible)
    .ok()
    .typeText(page.email_form, "a@a.com")
    .click(page.loginBtn)
    .expect(page.errrosSignIn.innerText)
    .contains(errors.required_password);
});
test("Validate sign-in form with valid email and wrong password", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .expect(page.email_form.visible)
    .ok()
    .typeText(page.email_form, "a@a.com")
    .expect(page.password_form.visible)
    .ok()
    .typeText(page.password_form, "12335246537")
    .click(page.loginBtn)
    .expect(page.errrosSignIn.innerText)
    .contains(errors.auth_error);
});

test("Validate forgot password with emtpy email", async (t) => {
  await t.click(page.signIn_Link);

  await t.click(page.forgot_link);

  await t
    .expect(page.email_form.visible)
    .ok()
    .click(page.retrive_password_btn)
    .expect(page.errorsForgotPassword.innerText)
    .contains(errors.invalid_email);
});

test("Validate forgot password with invalid email format", async (t) => {
  await t.click(page.signIn_Link);

  await t.click(page.forgot_link);

  await t
    .expect(page.email_form.visible)
    .ok()
    .typeText(page.email_form, "a54235.2c2etq7om.com")
    .click(page.retrive_password_btn)
    .expect(page.errorsForgotPassword.innerText)
    .contains(errors.invalid_email);
});

test("Validate forgot password with valid email", async (t) => {
  await t.click(page.signIn_Link);

  await t.click(page.forgot_link);

  await t
    .expect(page.email_form.visible)
    .ok()
    .typeText(page.email_form, "a@a.com")
    .click(page.retrive_password_btn)
    .expect(page.alertForgotPassword.innerText)
    .contains(errors.forgot_password_alert);
});