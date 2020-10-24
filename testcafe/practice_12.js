import page from './pageModel';

fixture('Practice 12 with TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

    test('Testing move slider', async t =>{
        await t
            .click(page.checkBox_Tried)
            .expect(page.checkBox_Tried.checked).ok()
            .dragToElement(page.slider.handle, page.slider.value.withText('9'))

    });