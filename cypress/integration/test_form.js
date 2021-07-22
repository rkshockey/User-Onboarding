//Test code
const fnameInput = () => cy.get('input[name=fname]');
const lnameInput = () => cy.get('input[name=lname]');
const emailInput = () => cy.get('input[name=email]');
const passwordInput = () => cy.get('input[name=password]');
const serviceBox = () => cy.get('input[name=termsService]');

describe('Test user onboarding form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Check name text', () => {
        fnameInput().should('have.value', '').type('Romy').should('have.value', 'Romy')
        lnameInput().should('have.value', '').type('Shockey').should('have.value', 'Shockey')
    })

    it('Check email text', () => {
        emailInput().should('have.value', '').type('rk@email.com').should('have.value', 'rk@email.com')
    })

    it('Check if checkbox works', () => {
        serviceBox().should('not.be.checked').click().should('be.checked')
    })

    it('Check passwod text'), () => {
        passwordInput().should('have.value', '').type('boopidy').should('have.value', 'boopidy')
    }
})