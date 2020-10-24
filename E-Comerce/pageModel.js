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
    }
}

export default new Page();