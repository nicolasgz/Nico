import openWebsite from '../support/action/openWebsite';
import LoginPage from '../pageobject/LoginPage/LoginPage';

module.exports = function given() {
    this.Given(
        /^I open salesforce login page$/,
            openWebsite
    );

    this.When(
        /^I set user "([^"]*)?" and password "([^"]*)?"$/, function(arg1,arg2) {
            LoginPage.open();
            LoginPage.username.setValue(arg1);
            LoginPage.password.setValue(arg2);
            
        });

    this.And(
        /^I click the login button$/,
            LoginPage.open();
            LoginPage.submit(); 
        );
}