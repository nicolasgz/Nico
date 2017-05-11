import page from '../pageobject/page'

var formPage = Object.create(page, {
    /**
     * defino elementos
     */
    username: { get: function () { return $('#username'); } },
    password: { get: function () { return $('#password'); } },
    submitButton: {
      get: function () { return $('#login'); }
    },
    flash:    { get: function () { return $('#flash'); } },

    /**
     * sobre escribo los metodos
     */
    open: { value: function() {
        page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.submitButton.click();
    } }
});

module.exports = formPage;