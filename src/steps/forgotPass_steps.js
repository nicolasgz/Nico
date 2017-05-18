var LoginPage = require('../pages/login_page.js');
var HeaderPage = require('../pages/header_page.js');
var ForgotPass = require('../pages/forgotPass_page.js');
module.exports = function() {
  
        this.Then(/^the forgot your password page displays$/, function(){
        ForgotPass.isForgotPassFormVisible();
	});

};