/// <reference types="Cypress" />
class GLogin
{
    visit(){
        //cy.viewport(1366 , 768)
        cy.visit("https://www.neutrogena.com/login?original=%2Faccount")

    }

    // this method is use to login form
    enterEmail(value){
        const field=cy.get(":nth-child(4) > #username")
        field.clear()
        field.type(value)
        return this

    }
    enterPassword(value){
        const field=cy.get('#password')
        field.clear()
        field.type(value)
        return this

    }
    clickSubmit(){
        const button=cy.get(':nth-child(6) > .button')
        button.click()
        cy.getCookies('auth_key')
        Cypress.Cookies.preserveOnce('PHPSESSID')
    }
    
    

    

}

export default GLogin