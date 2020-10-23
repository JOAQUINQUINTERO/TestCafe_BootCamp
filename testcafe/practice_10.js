import page from './pageModel';

fixture('Practice 10 with TestCafe with formy')
    .page('https://the-internet.herokuapp.com/');

    test('Testing mouse right click', async t =>{
        await t
            .click(page.right_click_Link)
        
        await t
            .setNativeDialogHandler()
            .rightClick(page.hot_spot_context)
    });