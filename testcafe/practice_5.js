import page from './pageModel';

fixture('Practice 5 with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Test with numbers', async t =>{
        await t
            .click(page.inputs_Link)

        await t
            .typeText(page.number_input, '235345243524')
            .expect(page.number_input.value).notEql('3423')
            .expect(page.number_input.value).eql('235345243524')
    });

    test('Test with letters', async t =>{
        await t
            .click(page.inputs_Link)

        await t
            .typeText(page.number_input, 'John Smith')
            .expect(page.number_input.value).eql('')
    });

    test('Test with numbers and replace funcion', async t =>{
        await t
            .click(page.inputs_Link)

        await t
            .typeText(page.number_input, '666', {replace:true})
            .typeText(page.number_input, '!@#$%^&8*()_}{":?><', {replace:true})
            console.log(page.number_input.value)
        await t.expect(page.number_input.value).eql('8')
        
    });

