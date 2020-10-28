import page from './pageModel';

fixture('Practice 11 with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Testing horizontal slider', async t =>{
        await t
            .click(page.horizontal_slider_Link)
        
        await t
            .click(page.horizontal_slider)
            .typeText(page.horizontal_slider, "3.5",{speed:0.1})
            .expect(page.horizontal_slider.value).eql('3.5')
    });

    test('Testing horizontal slider with arrows', async t =>{
        await t
            .click(page.horizontal_slider_Link)
        
        await t
            .click(page.horizontal_slider)
            .pressKey('RIGHT')
            .pressKey('RIGHT')
            .pressKey('RIGHT')
            .expect(page.horizontal_slider.value).eql('1.5')
    });