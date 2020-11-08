import page from "./pageModel";
import { data } from "./data";
import { Selector } from "testcafe";

fixture("Final Project account module").page(
  "http://automationpractice.com/index.php"
);

test("Validate add all products of category to cart and complete checkout", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .typeText(page.email_form, data.valid_email)
    .expect(page.email_form.value)
    .contains(data.valid_email)
    .typeText(page.password_form, data.password)
    .expect(page.password_form.value)
    .contains(data.password)
    .click(page.loginBtn);

  await t
    .expect(page.user_name.innerText)
    .eql(`${data.firstName} ${data.lastName}`)
    .expect(page.sign_out_link.visible)
    .ok();

  await t
    .expect(page.home_category_links.nth(0).exists)
    .ok()
    .click(page.home_category_links.nth(0));

  await t
    .expect(page.woman_dresses_links.visible)
    .ok()
    .click(page.woman_dresses_links.nth(1));

  await t.expect(page.product_list_grid.exists).ok();
  const numProducts = await page.product_list_grid.count;
  for (let i = 0; i < numProducts; i++) {
    await t
      .hover(page.product_list_grid.nth(i))
      .click(
        await Selector(
          "#center_column > ul > li:nth-child(" +
            (i + 1) +
            ") > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span"
        )
      )
      .click(page.continue_shopping);
  }

  await t
    .hover(page.checkout_menu)
    .expect(page.checkout_link.visible)
    .ok()
    .click(page.checkout_link);

  await t
    .expect(page.proceed_checkout.visible)
    .ok()
    .click(page.proceed_checkout);

  await t
    .expect(page.text_area_message.visible)
    .ok()
    .typeText(page.text_area_message, "This is a message for my purchase")
    .expect(page.proceed_checkout_btn.visible)
    .ok()
    .click(page.proceed_checkout_btn);

  await t
    .expect(page.agree_shipping_checkbox.visible)
    .ok()
    .click(page.agree_shipping_checkbox)
    .expect(page.agree_shipping_checkbox.checked)
    .ok()
    .expect(page.proceed_checkout_btn_submit.visible)
    .ok()
    .click(page.proceed_checkout_btn_submit);

  await t.expect(page.bank_wire.visible).ok().click(page.bank_wire);

  await t
    .expect(page.bank_wire_h3.innerText)
    .contains("BANK-WIRE PAYMENT.")
    .expect(page.confirm_order_btn.visible)
    .ok()
    .click(page.confirm_order_btn);

  await t
    .expect(page.checkout_complete_message.innerText)
    .contains("Your order on My Store is complete.")
    .expect(page.logo_Link.visible)
    .ok()
    .click(page.logo_Link);
});

test("Validate add all products of category to cart delete first two product and complete checkout", async (t) => {
  await t.click(page.signIn_Link);

  await t
    .typeText(page.email_form, data.valid_email)
    .expect(page.email_form.value)
    .contains(data.valid_email)
    .typeText(page.password_form, data.password)
    .expect(page.password_form.value)
    .contains(data.password)
    .click(page.loginBtn);

  await t
    .expect(page.user_name.innerText)
    .eql(`${data.firstName} ${data.lastName}`)
    .expect(page.sign_out_link.visible)
    .ok();

  await t
    .expect(page.home_category_links.nth(0).exists)
    .ok()
    .click(page.home_category_links.nth(0));

  await t
    .expect(page.woman_dresses_links.visible)
    .ok()
    .click(page.woman_dresses_links.nth(1));

  await t.expect(page.product_list_grid.exists).ok();
  const numProducts = await page.product_list_grid.count;
  for (let i = 0; i < numProducts; i++) {
    await t
      .hover(page.product_list_grid.nth(i))
      .click(
        await Selector(
          "#center_column > ul > li:nth-child(" +
            (i + 1) +
            ") > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span"
        )
      )
      .click(page.continue_shopping);
  }

  await t
    .hover(page.checkout_menu)
    .expect(page.checkout_link.visible)
    .ok()
    .click(page.checkout_link);

  await t
    .expect(page.delete_first_product_cart.visible).ok()
    .click(page.delete_first_product_cart)
    .expect(page.delete_second_product_cart.visible).ok()
    .click(page.delete_second_product_cart)
    .expect(page.proceed_checkout.visible)
    .ok()
    .click(page.proceed_checkout);

  await t
    .expect(page.text_area_message.visible)
    .ok()
    .typeText(page.text_area_message, "This is a message for my purchase")
    .expect(page.proceed_checkout_btn.visible)
    .ok()
    .click(page.proceed_checkout_btn);

  await t
    .expect(page.agree_shipping_checkbox.visible)
    .ok()
    .click(page.agree_shipping_checkbox)
    .expect(page.agree_shipping_checkbox.checked)
    .ok()
    .expect(page.proceed_checkout_btn_submit.visible)
    .ok()
    .click(page.proceed_checkout_btn_submit);

  await t.expect(page.bank_wire.visible).ok().click(page.bank_wire);

  await t
    .expect(page.bank_wire_h3.innerText)
    .contains("BANK-WIRE PAYMENT.")
    .expect(page.confirm_order_btn.visible)
    .ok()
    .click(page.confirm_order_btn);

  await t
    .expect(page.checkout_complete_message.innerText)
    .contains("Your order on My Store is complete.")
    .expect(page.logo_Link.visible)
    .ok()
    .click(page.logo_Link);
});
