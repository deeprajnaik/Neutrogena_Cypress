class search
{

//open the nertrogen site
visit()
{
	cy.visit("https://www.neutrogena.com")
	cy.wait(20000)
}

 closeOverlay() {
        
       cy.get('#yie-close-button-5f0efd87-bef8-5eee-b662-e569616a57a7').click()
       //cy.get('#yie-close-button-a2642441-2501-5ab9-bdd5-385352be503f').click()
        
    }

// Verify the page title
 verifyPageTitle() {
    cy.title().should('be.equal', 'Skin Care Products for Healthier Skin | Neutrogena®')
}

inValidSearch(){
	cy.get('#q').type('shampoo123')
cy.get('#wrapper > div.top-banner > div.header-guts-wrapper > div.header-search > form > fieldset > button > svg').click()

cy.contains('shampoo123').should('have.class', 'no-hits-search-term')
.wait(2000)
}

verifySearch()
{ 
	cy.get('#q').type('shampoo')
cy.get('#wrapper > div.top-banner > div.header-guts-wrapper > div.header-search > form > fieldset > button > svg').click()

cy.contains('We found 11 products for SHAMPOO.').should('have.class', 'search-result-msg')
.wait(2000)

}

refineDropdown()
{
	//click on "refine" dropdown
	cy.get('#dropdown-refinement-btn').click()
	.wait(2000)

    //select "Skin Concern" checkbox
    cy.get('#primary div:nth-child(4) > div > ul > li:nth-child(1) > a').click({ force: true })
    cy.contains('Anti Aging').should('have.class', 'breadcrumb-refinement-value')
    //cy.contains('2 Results').should('have.class', 'results-hits')
   
    //click on "show results" CTA
    cy.get('#primary div.show-results > a').click({ force: true })
    cy.contains('We found 2 products for SHAMPOO.').should('have.class', 'search-result-msg')
    .wait(4000)

     
    //click on "refine" dropdown
    cy.get('#dropdown-refinement-btn').click()
	.wait(4000)

	//Click on "Clear All" CTA 
	cy.get('#primary div.clear-all-refinements > a').click({ force: true })
	cy.contains('We found 11 products for SHAMPOO.').should('have.class', 'search-result-msg')
    .wait(2000)


    //click on "refine" dropdown
    cy.get('#dropdown-refinement-btn').click()
	.wait(4000)

    //select "Featured As" checkbox  
	cy.get('#primary div:nth-child(6) > div > ul > li > a').click({ force: true })
    //cy.contains('New').should('have.class', 'breadcrumb-refinement-value')

    //click on "show results" CTA
    cy.get('#primary div.show-results > a').click({ force: true })
    cy.contains('We found 4 products for SHAMPOO.').should('have.class', 'search-result-msg')
    .wait(4000)

    //click on "refine" dropdown
    cy.get('#dropdown-refinement-btn').click()
	.wait(4000)

	//Click on "Clear All" CTA 
	cy.get('#primary div.clear-all-refinements > a').click({ force: true })
    .wait(2000)

}

bestSellingDropdown()
{
	//click on "best selling" dropdown
	cy.get('#primary div.sort-refine-container > div > button').click()
	.wait(2000)

	cy.get('#primary div.sort-refine-container > div > ul > li:nth-child(2) > a').click({ force: true })
	cy.contains('New Arrivals').should('have.class', 'dropdown-btn')


	//click on "New Arrivals" dropdown
	cy.get('#primary div.sort-refine-container > div > button').click()
	.wait(2000)

	cy.get('#primary div.sort-refine-container > div > ul > li:nth-child(3) > a').click({ force: true })
	cy.contains('Recommended').should('have.class', 'dropdown-btn')


	//click on "Recommended" dropdown
	cy.get('#primary div.sort-refine-container > div > button').click()
	.wait(2000)

	cy.get('#primary div.sort-refine-container > div > ul > li:nth-child(4) > a').click({ force: true })
	cy.contains('Top Rated').should('have.class', 'dropdown-btn')


	//click on "Top Rated" dropdown
	cy.get('#primary div.sort-refine-container > div > button').click()
	.wait(2000)

	cy.get('#primary div.sort-refine-container > div > ul > li:nth-child(5) > a').click({ force: true })
	cy.contains('Award Winning').should('have.class', 'dropdown-btn')


	//click on "Award Winning" dropdown
	cy.get('#primary div.sort-refine-container > div > button').click()
	.wait(2000)

	cy.get('#primary div.sort-refine-container > div > ul > li:nth-child(6) > a').click({ force: true })
	cy.contains('Price - Low to High').should('have.class', 'dropdown-btn')


	//click on "'Price - Low to High" dropdown
	cy.get('#primary div.sort-refine-container > div > button').click()
	.wait(2000)

	cy.get('#primary div.sort-refine-container > div > ul > li:nth-child(7) > a').click({ force: true })
	cy.contains('Price - High to Low').should('have.class', 'dropdown-btn')




}

}


export default search