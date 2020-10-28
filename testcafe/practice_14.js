import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

    fixture('Practice 14 with TestCafe')
        .page ('https://the-internet.herokuapp.com/upload');

    test('Testing file upload', async t =>{
        await t

        .expect(Selector('#file-upload').visible).ok()
        .setFilesToUpload(Selector('#file-upload'), './file.jpeg')
        .click('#file-submit')

        await t
        .wait(1000)
        .expect(Selector('h3').innerText).contains('Uploaded')
        .expect(Selector('#uploaded-files').innerText).contains('file.jpeg')
    });



    test('Testing URL', async t =>{
        await t
        .expect(getLocation()).contains('https://the-internet.herokuapp.com/upload');
    });