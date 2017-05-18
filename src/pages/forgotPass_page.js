// // // forgotPass_page.js
'use strict';

module.exports = {

    forgotPassPage: {
      forgotPassForm: 	'#forgotPassForm',

  	},

  	   isForgotPassFormVisible: function(){
        return browser.getText(this.forgotPassPage.forgotPassForm);
    },

};