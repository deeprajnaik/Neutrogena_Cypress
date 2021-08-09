/// <reference types="Cypress" />
class NRegister {
    visit() {
        cy.visit("https://www.neutrogena.com/login?original=%2Faccount")
        //cy.visit("https://www.neutrogena.com/register")
        cy.get('#dwfrm_login_register > fieldset > .form-row > button').click({force: true})


    }
    verifyPageTitle() {
        cy.title().should('be.equal', 'Create Account | Neutrogena®')
    }
    /*closeOverlay() {
       cy.wait(40000)
        cy.get('yie-close-button-7cea8ac5-7aa9-5b0a-8a49-b7f13bd3db8a').click()
        //cy.get('#yie-close-button-eb1dfa95-9d51-5cc9-b21e-57cb3727e12f').click()
        //cy.get('#yie-close-button-5f0efd87-bef8-5eee-b662-e569616a57a7').click()


    }*/
    validationMessageEmptyFields() {
        //click submit CTA leaving mendatory fields blank
        //click submit button
        cy.get('#RegistrationForm > fieldset > div.form-row.form-row-button > button').click({force: true})
        //checking if error class is present
        cy.contains('This field is required.').should('have.class', 'error')

    }
    blankSpacesValidation() {
        //enter first name blank
        cy.get('#dwfrm_profile_customer_firstname').type(' ')
        //enter last name blank
        cy.get('#dwfrm_profile_customer_lastname').type(' ')
        //enter phone number blank
        cy.get('#dwfrm_customeraddress_phone').type(' ')

        //enter email id blank
        cy.get('#dwfrm_profile_customer_email').type(' ')
        //enter password blank
        cy.get('#dwfrm_profile_login_password').type(' ')
        //Confirm password blank
        cy.get('#dwfrm_profile_login_passwordconfirm').type(' ')
        //check checkbox blank
        cy.get('.field-wrapper > label').click({ force: true })
        //click submit button blank
        cy.get('#RegistrationForm > fieldset > div.form-row.form-row-button > button').click({force: true})
        cy.contains('This field is required.').should('have.class', 'error')
    }

    passwordValidation() {
        //enter password which does not matches with password two
        cy.get('#dwfrm_profile_login_password').clear().type('password1')
        //Confirm password 
        cy.get('#dwfrm_profile_login_passwordconfirm').clear().type('password2')
        cy.contains('This field is required.').should('have.class', 'error')

    }
    invalidDataValidation() {
        //enter first name
        cy.get('#dwfrm_profile_customer_firstname').type('Test')
        //enter last name
        cy.get('#dwfrm_profile_customer_lastname').type('User')
        //enter phone number
        cy.get('#dwfrm_customeraddress_phone').type('0123102110')
        //customer DOB - Month
        //cy.get('#dwfrm_profile_customer_dob_month').click() wrong
        cy.get('#dwfrm_profile_customer_dob_month').select('1')
        //customer  DOB - Year
        cy.get('#dwfrm_profile_customer_dob_year').select('2015')
        //enter email id
        var canonical_email = Math.floor(Math.random() * 100);
        cy.get('#dwfrm_profile_customer_email').type('amdv1991+' + canonical_email + '@gmail.com')
        //enter password
        cy.get('#dwfrm_profile_login_password').type('Amdv1234#')
        //Confirm password
        cy.get('#dwfrm_profile_login_passwordconfirm').type('Amdv1234#')
        //check checkbox
        cy.get('.field-wrapper > label').click({ force: true })
        //click submit button
        cy.get('#RegistrationForm > fieldset > div.form-row.form-row-button > button').click({force: true})
    }

    fillRegistrationForm() {
        //enter first name
        cy.get('#dwfrm_profile_customer_firstname').clear().type('Test')
        //enter last name
        cy.get('#dwfrm_profile_customer_lastname').clear().type('User')
        //enter phone number
        cy.get('#dwfrm_customeraddress_phone').clear().type('0123102110')
        //customer DOB - Month
        //cy.get('#dwfrm_profile_customer_dob_month').click() wrong
        cy.get('#dwfrm_profile_customer_dob_month').select('1')
        //customer  DOB - Year
        cy.get('#dwfrm_profile_customer_dob_year').select('1900')
        //enter email id
        var canonical_email = Math.floor(Math.random() * 10000);
        cy.get('#dwfrm_profile_customer_email').clear().type('amdv1991+' + canonical_email + '@gmail.com')
        //enter password
        cy.get('#dwfrm_profile_login_password').clear().type('Amdv1234#')
        //Confirm password
        cy.get('#dwfrm_profile_login_passwordconfirm').clear().type('Amdv1234#')
        //check checkbox
        cy.get('.field-wrapper > label').click({ force: true })
        //click submit button
        cy.get('#RegistrationForm > fieldset > div.form-row.form-row-button > button').click({force: true})


    }



}
export default NRegister
