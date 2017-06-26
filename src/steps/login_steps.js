var LoginPage = require('../pages/login_page.js');

module.exports = function() {

    this.When(/^I set the username "([^"]*)" and password "([^"]*)"$/, function(name, pass) {
        LoginPage.setUsername(name);
        LoginPage.setPassword(pass);
    });

    this.When(/^I click Login button$/, function() {
        LoginPage.clickLoginButton();
    });

    this.Then(/^Error message is "([^"]*)"$/, function(error) {
        var current_error = LoginPage.getErrorLabel();
        expect(current_error).to.include(error, `Current error message: '${current_error}' but expected error message: '${error}'.`);
    });

    this.Then(/^I am not logged in$/, function(){
        var isLoginButtonPresent = LoginPage.isLoginButtonPresent();
        expect(isLoginButtonPresent).to.equal(true, 'Expected to be at login page.');
    })

};