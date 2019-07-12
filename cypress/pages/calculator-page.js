class CalculatorPage {

    static pressKey(keyNum) {
        cy.get('body').type(keyNum, { delay: 1000});
    }

    static subtraction(valueOne, valueTwo) {
        cy.get('body').type(valueOne);
        cy.get('body').type('-');
        cy.get('body').type(valueTwo);
        cy.get('body').type('{enter}');
    }

    static division(valueOne, valueTwo) {
        cy.get('body').type(valueOne);
        cy.get('body').type('/');
        cy.get('body').type(valueTwo);
        cy.get('body').type('{enter}');
    }

    static pressClear() {
        cy.get('body').type('c');
    }
}

export default CalculatorPage;