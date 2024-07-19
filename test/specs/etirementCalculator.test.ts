import RetirementCalculatorPage from '../pageobjects/retirementCalculatorPage';
import { testData } from '../data/testData';

describe('Retirement Calculator', () => {
    it('should calculate retirement with valid data', async () => {
        await RetirementCalculatorPage.open();

        await RetirementCalculatorPage.fillRetirementForm(testData.retirementForm);
        await RetirementCalculatorPage.clickCalculate();

        // Add assertions to verify the results...
    });

    it('should show validation errors with invalid data', async () => {
        await RetirementCalculatorPage.open();

        const invalidData = { ...testData.retirementForm, currentAge: -1 };
        await RetirementCalculatorPage.fillRetirementForm(invalidData);
        await RetirementCalculatorPage.clickCalculate();

        // Add assertions to verify the validation errors...
    });

    it('should adjust default values and calculate', async () => {
        await RetirementCalculatorPage.open();

        await RetirementCalculatorPage.clickAdjustDefaultValues();
        
        // Fill in default values here using page object methods and testData.defaultValues

        await RetirementCalculatorPage.fillRetirementForm(testData.retirementForm);
        await RetirementCalculatorPage.clickCalculate();

        // Add assertions to verify the results...
    });
});
