import openWebsite from '../support/action/openWebsite';

module.exports = function given() {
    this.Given(
        /^I open the (url|site) "([^"]*)?"$/,
        openWebsite
    );
    
    this.Given(
        /^I open salesforce login page$/,
            openWebsite
    );

    this.When(
        /^I set user "([^"]*)?" and password "([^"]*)?"$/,
        );

}