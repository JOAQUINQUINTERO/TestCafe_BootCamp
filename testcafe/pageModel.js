import { Selector }  from 'testcafe';

class Page{
    constructor(){
        //Practice 2
        //this.link2 = Selector('#content > ul > li:nth-child(1) > a');
        this.AB_Link = Selector('a').withText('A/B Testing');
        //this.text21 = Selector('h3').withText('A/B Test Variation 1');
        this.AB_H3 = Selector('#content > div > h3');

        //Practice 3
        this.forgot_Link = Selector('a').withText('Forgot Password');
        this.forgot_Input = Selector('#email');
        this.forgot_Button_Submit = Selector('#form_submit');
        this.confirm_text = Selector('#content');

        //Practice 4
        this.checkboxes_Link = Selector('a').withText('Checkboxes');
        this.checkBoxes_Form = Selector('#checkboxes > input[type=checkbox]');

        //Practice 5
        this.inputs_Link = Selector('a').withText('Inputs');
        this.number_input = Selector('#content > div > div > div > input[type=number]');

        //Practice 6
        this.add_remove_Link = Selector('a').withText('Add/Remove Elements');
        this.add_Btn = Selector('#content > div > button');
        this.remove_Btn = Selector('#elements > button');

        //Practice 7
        this.input_first_name = Selector('#first-name');
        this.input_last_name = Selector('#last-name');
        this.input_job_title = Selector('#job-title');
        this.radio_button_1 = Selector('#radio-button-1');
        this.radio_button_2 = Selector('#radio-button-2');
        this.radio_button_3 = Selector('#radio-button-3');
        this.checkbox_1 = Selector('#checkbox-1');
        this.checkbox_2 = Selector('#checkbox-2');
        this.checkbox_3 = Selector('#checkbox-3');
        this.select_menu = Selector('#select-menu');
        this.select_menu_opt = Selector('#select-menu > option');
        this.datepicker = Selector('#datepicker');
        this.btn_submit = Selector('body > div > form > div > div:nth-child(15) > a');
        this.submit_text = Selector('h1').withText('Thanks for submitting your form');

        //Practice 8 HomeWork Auth Login

        //Practice 9
        this.key_press_Link = Selector('a').withText('Key Presses');
        this.input_key_press = Selector('#target');
        this.result_key_press = Selector('#result');

        //Practice 10
        this.right_click_Link = Selector('a').withText('Context Menu');
        this.hot_spot_context = Selector('#hot-spot');
    }
}

export default new Page();