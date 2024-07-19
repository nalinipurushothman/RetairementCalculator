class RetirementCalculatorPage {
    get ageInput() { return $('#age'); }
    get incomeInput() { return $('#income'); }
    get socialSecurityInput() { return $('#social-security'); }
    get adjustDefaultsButton() { return $('#adjust-defaults'); }
    get calculateButton() { return $('#calculate'); }
    get popupCloseButton() { return $('#popup-close'); }
    get result() { return $('#result'); }

    async fillForm(data) {
        await this.ageInput.setValue(data.age);
        await this.incomeInput.setValue(data.income);
        await this.socialSecurityInput.setValue(data.socialSecurity);
    }

    async submitForm() {
        await this.calculateButton.click();
    }

    async isResultDisplayed() {
        return await this.result.isDisplayed();
    }

    async toggleSocialSecurity() {
        await this.socialSecurityToggle.click();
    }

    async adjustDefaultValues() {
        await this.adjustDefaultsButton.click();
    }

    async handlePopup() {
        if (await this.popupCloseButton.isDisplayed()) {
            await this.popupCloseButton.click();
        }
    }

    async getCalculatorResult() {
        return await this.result.getText();
    }

    async fillDefaultValues(data) {
        for (const [key, value] of Object.entries(data)) {
            await $(`#${key}`).setValue(value);
        }
    }

    async saveChanges() {
        await $('#save-changes').click();
    }
}

module.exports = new RetirementCalculatorPage();
