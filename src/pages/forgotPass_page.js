// // // forgotPass_page.js
'use strict';

module.exports = {

    forgotPassPage: {
      forgotPassForm: 	'#forgotPassForm',

  	},

  	   isForgotPassFormVisible: function(){
		browser.isVisible(this.forgotPassPage.forgotPassForm);
		
    },

};