import page from "./pageModel";
import { errors, urls } from "./constants";
import { ClientFunction } from "testcafe";

fixture("Final Project account module").page(
  "http://automationpractice.com/index.php"
);

test("Validate logo url redirect", async (t) => {
  await t.click(page.logo_Link);
  const urlLocation = ClientFunction(() => document.location.href);

  await t.expect(urlLocation()).contains(urls.logo_url_redirect);
});

test("Validate next and previous button banner images", async (t) => {
  await t
    .expect(page.banner_images_next_btn.visible)
    .ok()
    .expect(page.banner_images_prev_btn.visible)
    .ok()
    .click(page.banner_images_next_btn)
    .click(page.banner_images_next_btn)
    .click(page.banner_images_next_btn)
    .click(page.banner_images_prev_btn)
    .click(page.banner_images_prev_btn)
    .click(page.banner_images_prev_btn);
});

test("Validate banner images url redirect", async (t) => {
  await t
    .expect(page.home_slider_images_link.nth(1).visible)
    .ok()
    .click(page.home_slider_images_link.nth(1));
    const urlLocation = ClientFunction(() => document.location.href);

  await t.expect(urlLocation()).notContains(urls.home_url);
});

test("Validate best seller and popular links", async (t) => {
  await t
    .expect(page.home_page_tabs_link.nth(1).visible)
    .ok()
    .click(page.home_page_tabs_link.nth(1))
    .expect(page.best_seller_product_grid.visible)
    .ok()
    .expect(page.popular_product_grid.visible)
    .notOk();
  await t
    .expect(page.home_page_tabs_link.nth(0).visible)
    .ok()
    .click(page.home_page_tabs_link.nth(0))
    .expect(page.popular_product_grid.visible)
    .ok()
    .expect(page.best_seller_product_grid.visible)
    .notOk();
});

test("Validate search input of null values", async (t) => {
  await t.expect(page.search_input.exists).ok().click(page.search_input_sumbit);

  await t
    .expect(page.search_alert.exists)
    .ok()
    .expect(page.search_alert.innerText)
    .contains(errors.search_alert_error);
});

test("Validate search input of not existing values", async (t) => {
  await t
    .expect(page.search_input.exists)
    .ok()
    .typeText(page.search_input, "adfadsfads")
    .click(page.search_input_sumbit);

  await t
    .expect(page.search_alert.exists)
    .ok()
    .expect(page.search_alert.innerText)
    .contains(errors.search_alert_error_no_results);
});

test("Validate search input of existing values", async (t) => {
  await t
    .expect(page.search_input.exists)
    .ok()
    .typeText(page.search_input, "woman dress")
    .click(page.search_input_sumbit);

  await t
    .expect(page.search_results_msg.exists)
    .ok()
    .expect(page.search_results_msg.innerText)
    .contains('"WOMAN DRESS"');
});

test("Validate T-Shirt link and validate banner title", async (t) => {
  await t
    .expect(page.home_category_links.nth(2).exists)
    .ok()
    .click(page.home_category_links.nth(2));

  await t
    .expect(page.t_shirt_banner_title.exists)
    .ok()
    .expect(page.t_shirt_banner_title.innerText)
    .contains("T-shirts");
});

test("Validate T-Shirt link and validate results", async (t) => {
  await t
    .expect(page.home_category_links.nth(2).exists)
    .ok()
    .click(page.home_category_links.nth(2));

  await t.expect(page.product_list_grid.exists).ok();
  const numProducts = await page.product_list_grid.count;
  for (var i = 0; i < numProducts; i++)
    await t
      .expect(page.product_list_grid.nth(i).innerText)
      .contains("T-shirts");
});

test("Validate Woman dresses link and validate results", async (t) => {
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
  for (var i = 0; i < numProducts; i++)
    await t.expect(page.product_list_grid.nth(i).innerText).contains("Dress");
});

test("Validate hover Woman and select blouse validate results", async (t) => {
  await t
    .expect(page.home_category_links.nth(0).exists)
    .ok()
    .hover(page.home_category_links.nth(0))
    .click(page.woman_drop_down_menu_blouses);

  await t.expect(page.product_list_grid.exists).ok();
  const numProducts = await page.product_list_grid.count;
  for (var i = 0; i < numProducts; i++)
    await t.expect(page.product_list_grid.nth(i).innerText).contains("Blouse");
});