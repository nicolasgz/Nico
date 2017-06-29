Automation: Cucumber + WebdriverIO + JS
========================================

## Download sublime 3: https://www.sublimetext.com/3
- Command + shift + p > Install Package Control
- Command + shift + p > Package Control: Install Package
- Cucumber
- Cucumber Step FInder
- AllAutocomplete
## Download SourceTree: https://www.sourcetreeapp.com/
## Install brew: https://brew.sh/
## Install xcode from Apple Store.
## Install latest SDK.
## Install node.js and NPM
- $ brew install node
- $ brew install npm
## Open a console > move to the project folder > run: $ npm install -g
## Install dependencies:
- $ npm install webdriverio -g
- $ npm install wdio-selenium-standalone-service -g
- $ npm install babel-preset-es2015 --save
- $ npm install chai -g
- $ npm install --save-dev chai
- $ npm install wdio-spec-reporter -g
- $ npm install wdio-cucumber-framework -g
## If needed install:
- $ npm install selenium-standalone@latest -g
- $ selenium-standalone install
- $ selenium-standalone start
- $ npm install babel-register -g
- $ npm install babel-preset-es2015 -g
## Install chromedriver:
- $ brew install chromedriver
## Any missing dependency should be installed like:
- $ npm install [dependency] -g
## To run all features:
- ./node_modules/.bin/wdio
## To run an specific feature:
- ./node_modules/.bin/wdio wdio.conf.js --spec ./src/features/<feature_name>.feature
## Webdriver documentation:
- http://webdriver.io/
## Chai documentation:
- http://chaijs.com/
- https://www.npmjs.com/package/chai-webdriver
## Introduction to javascript:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
## CSS & XPATH guide:
- https://www.simple-talk.com/dotnet/.net-framework/xpath,-css,-dom-and-selenium-the-rosetta-stone/
## Cucumber:
- https://github.com/cucumber/cucumber/blob/master/docs/gherkin.md
## PageObject:
- https://martinfowler.com/bliki/PageObject.html