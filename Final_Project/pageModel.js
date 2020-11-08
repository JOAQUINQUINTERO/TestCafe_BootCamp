import { Selector }  from 'testcafe';

class Page{
    constructor(){
        this.signIn_Link = Selector('a').withText('Sign in');
        this.email_Input = Selector('#email_create');
        this.btn_createAcount = Selector('#SubmitCreate');
        this.firstName_Input = Selector('#customer_firstname');
        this.lastName_Input = Selector('#customer_lastname');
        this.email_form = Selector('#email');
        this.password_form = Selector('#passwd');
        this.firstName_Address = Selector('#firstname');
        this.lastName_Address = Selector('#lastname');
        this.address_Input = Selector('#address1');
        this.city_Input = Selector('#city');
        this.state_Select = Selector('#id_state');
        this.state_Select_opt = Selector('#id_state > option');
        this.post_code_Input = Selector('#postcode');
        this.country_Select = Selector('#id_country');
        this.country_Select_opt = Selector('#id_country > option');
        this.phone_Input = Selector('#phone_mobile');
        this.addressAlias = Selector('#alias');
        this.btn_Submit = Selector('#submitAccount');
        this.errorsAccountEmail = Selector('#create_account_error > ol > li');
        this.createForm = Selector('#account-creation_form');
        this.loginBtn = Selector('#SubmitLogin');
        this.errrosSignIn = Selector('#center_column > div.alert.alert-danger > ol > li');
        this.forgot_link = Selector('a').withText('Forgot your password?');
        this.retrive_password_btn = Selector('#form_forgotpassword > fieldset > p > button');
        this.errorsForgotPassword = Selector('#center_column > div > div > ol > li');
        this.alertForgotPassword = Selector('#center_column > div > p');
        this.register_Form = Selector('#center_column > div > ol > li');
        this.logo_Link = Selector('#header_logo > a > img');
        this.banner_images_next_btn = Selector('#homepage-slider > div > div.bx-controls.bx-has-controls-direction > div > a.bx-next');
        this.banner_images_prev_btn = Selector('#homepage-slider > div > div.bx-controls.bx-has-controls-direction > div > a.bx-prev');
        this.home_slider_images_link = Selector('#homeslider > li');
        this.popular_product_grid = Selector('#homefeatured');
        this.best_seller_product_grid = Selector('#blockbestsellers');
        this.home_page_tabs_link = Selector('#home-page-tabs > li');
        this.search_input = Selector('#search_query_top');
        this.search_input_sumbit = Selector('#searchbox > button');
        this.search_alert = Selector('#center_column > p');
        this.search_results_msg = Selector('#center_column > h1 > span.lighter');
        this.home_category_links = Selector('#block_top_menu > ul > li');
        this.t_shirt_banner_title = Selector('#center_column > div.content_scene_cat > div > div > span');
        this.product_list_grid = Selector('#center_column > ul > li');
        this.woman_dresses_links = Selector('#categories_block_left > div > ul > li');
        this.woman_drop_down_menu_blouses = Selector('a').withText('Blouses');
        this.user_name = Selector('#header > div.nav > div > div > nav > div:nth-child(1) > a > span');
        this.sign_out_link = Selector('a').withText('Sign out');
        this.continue_shopping = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span');
        this.checkout_menu = Selector('a').withText('Cart');
        this.checkout_link = Selector('#button_order_cart');
        this.proceed_checkout = Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span');
        this.text_area_message = Selector('#ordermsg > textarea');
        this.proceed_checkout_btn = Selector('#center_column > form > p > button');
        this.agree_shipping_checkbox = Selector('#cgv');
        this.proceed_checkout_btn_submit = Selector('#form > p > button');
        this.bank_wire = Selector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
        this.bank_wire_h3 = Selector('#center_column > form > div > h3');
        this.confirm_order_btn = Selector('#cart_navigation > button');
        this.checkout_complete_message = Selector('#center_column > div > p');
        this.delete_first_product_cart = Selector('#product_3_13_0_404569 > td.cart_delete.text-center > div > a');
        this.delete_second_product_cart = Selector('#product_4_16_0_404569 > td.cart_delete.text-center > div > a');

    }
}

export default new Page();