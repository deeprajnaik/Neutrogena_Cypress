class Login
{

//open the nertrogen site
visit()
{
	cy.visit("https://www.neutrogena.com")
}

// Verify the page title
 verifyPageTitle() {
    cy.title().should('be.equal', 'Skin Care Products for Healthier Skin | Neutrogena®')
}



//click on the profile icon and visit to login page
profileIcon()
{
	cy.get('#wrapper > div.top-banner > div.header-guts-wrapper > div.user-info > a > svg').invoke('show')
	.trigger('mouseover')
	.wait(2000)
	cy.get('#wrapper div.header-guts-wrapper > div.user-info > div.user-panel > div > a:nth-child(1)').click()

    //cy.contains('Login').click({force: true})
    //cy.url().should('include','My Account Login')
    
}

    fillIncorrectEmail()
	{
		cy.get('#dwfrm_login_username').clear().type('abc@gmail', {delay: 100})
		cy.should('have.value', 'abc@gmail')
	    cy.get('#dwfrm_login_password').clear().type('Testing@123', {delay: 100})
	    cy.should('have.value', 'Testing@123')
		
	}

	fillIncorrectPassword()
	{
		cy.get('#dwfrm_login_username').clear().type('switzy12@gmail.com', {delay: 100})
		cy.should('have.value', 'switzy12@gmail.com')
		cy.get('#dwfrm_login_password').clear().type('123456', {delay: 100})
		cy.should('have.value', '123456')
		
	}

	 /*//Correct email and password filed submission
	 fillCorrectCredentials()
	 {
	 cy.get('#dwfrm_login_username').clear().type(this.data.email)
	  cy.get('#dwfrm_login_password').clear().type(this.data.password)

   }*/

	// Click of sumbit CTA 
	submit()
	{
		const button=cy.get('.large')
		button.click()
	}

   //verify the validation message for blank field submission
	verifyValidationMessage() 
   {
		cy.contains('This field is required.').should('have.class', 'error')
		.wait(3000)
	}

	//verify the validation message for Incorrect credentials field submission
	verifyIncorrectEmailField()
		{
		cy.contains('Please enter a valid email address.').should('have.class', 'error')
		.wait(3000)
	}

	//verify the validation message for Incorrect credentials field submission
	verifyIncorrectCredentialsField() 
		{
		cy.contains('Sorry, this does not match our records. Check your spelling and try again.').should('have.class', 'error-form')
	}


 /*verifyLoginPageTitle() {
    cy.title().should('be.equal', 'My Account Home | Neutrogena®')
}
*/
	
  }



export default Login


