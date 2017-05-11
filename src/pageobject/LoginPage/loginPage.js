//import page from '../pageobject/page'

var formPage = Object.create(page, {
    /**
     * defino elementos
     */
    username: { get: function () { return $('#username'); } },
    password: { get: function () { return $('#password'); } },
    submitButton: {
      get: function () { return $('#login'); }
    },
    
    //flash:    { get: function () { return $('#flash'); } 

    //CLick button login
    submit: { value: function() {
        this.submitButton.click();
    } }
});

module.exports = formPage;