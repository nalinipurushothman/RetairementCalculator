import RetirementCalculatorPage from '../pageobjects/retirementCalculatorPage';
import { testData } from '../data/testData';
import { expect } from 'chai';

describe('Retirement Calculator', () => {
    it('should calculate retirement with valid data', async () => {
        try {
            await RetirementCalculatorPage.open();
            await RetirementCalculatorPage.fillRetirementForm(testData.retirementForm);
            await RetirementCalculatorPage.clickCalculate();

            // Assertions: Add specific assertions based on the expected results
            // Example: Check if a result element is displayed or verify a result value
            // const result = await RetirementCalculatorPage.resultElement.getText();
            // expect(result).to.include('Expected Result');

            console.log('Calculated retirement with valid data.');
        } catch (error) {
            console.error('Test failed for valid data.', error);
            throw error;
        }
    });

    it('should show validation errors with invalid data', async () => {
        try {
            await RetirementCalculatorPage.open();
            const invalidData = { ...testData.retirementForm, currentAge: -1 };
            await RetirementCalculatorPage.fillRetirementForm(invalidData);
            await RetirementCalculatorPage.clickCalculate();

            // Assertions: Check if validation error messages are displayed
            // Example: Verify error message for age field
            const ageErrorMessage = await RetirementCalculatorPage.ageErrorMessage.getText();
            expect(ageErrorMessage).to.include('Invalid age');

            console.log('Validation errors displayed for invalid data.');
        } catch (error) {
            console.error('Test failed for invalid data.', error);
            throw error;
        }
    });

    it('should adjust default values and calculate', async () => {
        try {
            await RetirementCalculatorPage.open();
            await RetirementCalculatorPage.clickAdjustDefaultValues();
            
            // Fill in default values
            await RetirementCalculatorPage.fillDefaultValues(testData.defaultValues);
            
            // Re-fill the form with updated values and calculate
            await RetirementCalculatorPage.fillRetirementForm(testData.retirementForm);
            await RetirementCalculatorPage.clickCalculate();

            // Assertions: Add specific assertions based on the expected results
            // Example: Check if a result element is displayed or verify a result value
            // const result = await RetirementCalculatorPage.resultElement.getText();
            // expect(result).to.include('Expected Result');

            console.log('Adjusted default values and calculated retirement.');
        } catch (error) {
            console.error('Test failed for adjusting default values.', error);
            throw error;
        }
    });
});
