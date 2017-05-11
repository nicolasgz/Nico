import openWebsite from '../support/action/openWebsite';
import setInputField from '../support/action/setInputField';
import pressButton from '../support/action/pressButton';
import checkTitle from '../support/check/checkTitle';
import pause from '../support/action/pause';

module.exports = function given() {
    this.Given(
        /^I open the (url|site) "([^"]*)?"$/,
        openWebsite
    );

    this.When(
        /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
        setInputField
    );

    this.When(
        /^I press "([^"]*)?"$/,
        pressButton
    );

    this.Then(
        /^I expect that the title is( not)* "([^"]*)?"$/,
        checkTitle
    );

    this.When(
        /^I pause for (\d+)ms$/,
        pause
    );
}