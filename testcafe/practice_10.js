import page from './pageModel';

fixture('Practice 10 with TestCafe')
    .page('https://the-internet.herokuapp.com/');

    test('Testing mouse right click', async t =>{
        await t
            .click(page.right_click_Link)
        
        await t
            .setNativeDialogHandler(() => true)
            .rightClick(page.hot_spot_context)

            const history = await t.getNativeDialogHistory();
            console.log(history)

        await t
            .wait(200)
            .expect(history[0].type).eql('alert')
            .expect(history[0].text).eql('You selected a context menu')
            .expect(history[0].url).eql('https://the-internet.herokuapp.com/context_menu')

    });