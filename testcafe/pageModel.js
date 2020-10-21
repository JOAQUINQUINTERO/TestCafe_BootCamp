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
    }
}

export default new Page();