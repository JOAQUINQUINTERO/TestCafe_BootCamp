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
    }
}

export default new Page();