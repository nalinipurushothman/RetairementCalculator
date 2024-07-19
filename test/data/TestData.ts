export interface RetirementForm {
    currentAge: number;
    retirementAge: number;
    currentIncome: number;
    spouseIncome: number;
    currentSavings: number;
    currentContribution: number;
    annualContributionIncrease: number;
    socialSecurity: boolean;
    socialSecurityOverride: number;
    additionalIncome: number;
    retirementYears: number;
    postRetirementIncomeIncrease: boolean;
    desiredIncome: number;
    preRetirementReturn: number;
    postRetirementReturn: number;
}

export interface DefaultValues {
    inflationRate: number;
    investmentReturn: number;
    retirementYears: number;
}

export const testData = {
    retirementForm: {
        currentAge: 40,
        retirementAge: 68,
        currentIncome: 100000,
        spouseIncome: 75000,
        currentSavings: 500000,
        currentContribution: 10,
        annualContributionIncrease: 0.25,
        socialSecurity: true,
        relationshipStatus: 'Married',
        socialSecurityOverride: 4000,
        additionalIncome: 500,
        retirementYears: 20,
        postRetirementIncomeIncrease: true,
        desiredIncome: 75,
        preRetirementReturn: 8,
        postRetirementReturn: 5
    },
    defaultValues: {
        inflationRate: 2.5,
        investmentReturn: 6.5,
        retirementYears: 20
    }
};
