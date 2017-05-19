var ForgotPass = require('../pages/forgotPass_page.js');
var UtilsPage = require('../pages/utils_page.js');
module.exports = function() {
  
    this.Then(/^Forgot your password page is displayed: "([^"]*)"$/, function(expected){
        ForgotPass.isForgotPassFormVisible();
        var pageUrl = UtilsPage.getUrl();
        expect((pageUrl != 'https://login.salesforce.com/').toString()).to.equal(expected,
            `Current page: ${pageUrl} expected to be ${expected}.`);
    });
};