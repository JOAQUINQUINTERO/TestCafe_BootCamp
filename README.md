# TestCafe_BootCamp
* **README strictly for the QAMind TestCafe course**

<p align="center">
    <a href="https://devexpress.github.io/testcafe">
        <img src="https://raw.githubusercontent.com/DevExpress/testcafe/master/media/testcafe-logo.svg?sanitize=true" alt="testcafe" />
    </a>
</p>

<p align="center">
  <i>A Node.js end-to-end web testing.<br/>Write tests in JS or TypeScript.</i>
</p>

* **TestCafe runs on Windows, MacOS, and Linux.**
* **Set up in less than a minute**: Install TestCafe with only one command: `npm install -g testcafe`
* **Open source**: TestCafe is free to use under the [MIT license](https://github.com/DevExpress/testcafe/blob/master/LICENSE).

![Install TestCafe and Run a Test](https://raw.githubusercontent.com/DevExpress/testcafe/master/media/install-and-run-test.gif)

## Getting Started

### Installation and Requirements

Make sure that [Node.js](https://nodejs.org/), recomended that version 6 or newer is installed and [npm](https://www.npmjs.com/) is installed in your computer.

```sh
npm install -g testcafe
```


* [<a href="https://code.visualstudio.com/download" rel="nofollow">Visual Studio Code</a>] - Code editing, open source.
* [<a href="https://git-scm.com/downloads" rel="nofollow">Git</a>] - Version control system designed to handle everything from small to very large projects with speed and efficiency.
* [<a href="https://www.google.com/chrome/" rel="nofollow">Chrome</a>] - Web Browser for viewing tests.
* [<a href="https://www.mozilla.org/en-US/firefox/new/" rel="nofollow">FireFox</a>] - Web Browser for viewing tests.
* [<a href="https://www.apple.com/safari/" rel="nofollow">Safari</a>] - Web Browser for viewing tests

### Test Example

For a working example, you can look up the official documentation here [https://devexpress.github.io/testcafe/example](https://devexpress.github.io/testcafe/example).

Create a `.js` or `.ts` file on your computer.
You can paste the following code to see the test:

```js
import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});
```

### Always remember to push any changes to your git repository

<p align="center">
    <a href="https://devexpress.github.io/testcafe">
        <img src="https://raw.githubusercontent.com/louim/in-case-of-fire/master/in_case_of_fire.svg?sanitize=true" alt="testcafe" />
    </a>
</p>

### Run and view your Example Test

Write the following command in a new terminal window where your project is created.
* **You can specify in which web browser to run your test by specifying it after the testcafe command**

```sh
testcafe safari test1.js
```

TestCafe opens the browser and starts executing the test.


### View results

Your test results are put into a termnal window by default. Here you can observe how many of your test passed or failed.

![Test Report](https://github.com/DevExpress/testcafe/blob/master/docs/articles/images/report.png)

## Documentation

For the full [documentation](https://devexpress.github.io/testcafe/documentation/getting-started/) on TestCafe.