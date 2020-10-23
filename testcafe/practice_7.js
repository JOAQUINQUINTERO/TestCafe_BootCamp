import page from './pageModel';

fixture('Practice 7 with TestCafe with formy')
    .page('https://formy-project.herokuapp.com/form');

    test('Testing first form', async t =>{
        await t
            .typeText(page.input_first_name, 'Joaquin')
            .expect(page.input_first_name.value).contains('Joaquin')
            .typeText(page.input_last_name, 'Quintero')
            .expect(page.input_last_name.value).contains('Quintero')
            .typeText(page.input_job_title, 'DEV')
            .expect(page.input_job_title.value).contains('DEV')
            .click(page.radio_button_1)
            .expect(page.radio_button_1.checked).ok()
            .click(page.checkbox_1)
            .expect(page.checkbox_1.checked).ok()
            .click(page.select_menu)
            .click(page.select_menu_opt.nth(4))
            .typeText(page.datepicker, '10222020')
            .click(page.btn_submit)

        await t
            .expect(page.submit_text.visible).ok()
    });