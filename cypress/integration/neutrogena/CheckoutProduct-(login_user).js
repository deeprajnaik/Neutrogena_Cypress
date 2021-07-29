class checkoutLogin
{

//open the nuetrogena site


visit()
{
  cy.visit("https://development-web-jnj.demandware.net/s/Neutrogena/Home")
  .wait(5000)

}

// Verify the page title
 verifyPageTitle() {
    cy.title().should('be.equal', 'Skin Care Products for Healthier Skin | Neutrogena®')
}

/*closeOverlay() {
       //close the overlay    
       cy.get('#yie-close-button-4d886615-9976-591f-b671-062c4498026f').click()
       //cy.get('#yie-close-button-a2642441-2501-5ab9-bdd5-385352be503f').click()

        
    }*/

//Click on Nevigation menu and select the product
menuItem()
{
//hover on "skin care" nav menu bar
  cy.contains('Skin Care').trigger('mouseover')
  //cy.get('#navigation ul.menu-category.level-1 > li:nth-child(2) > a').trigger('mouseover')
  .wait(3000)
  

//click on "masks" product type in dropdown
  cy.get('#navigation li:nth-child(2) > div > div > div.menu-groupings > div:nth-child(3) > ul > li:nth-child(5) > a')
    .click({force: true})
  cy.contains('Masks').should('have.class', 'nav-subcat-link')
   .wait(5000)
}

// select the first product from PLP (product list page)
  selectProduct()
  {
    //select the first product "Hydro Boost Hydrating 100% Hydrogel Mask" from PLP
    cy.get('#search-result-items li:nth-child(1) > div > div.product-image > a.thumb-link > img').first().click({force: true})
    cy.contains('Hydro Boost Hydrating 100% Hydrogel Mask').should('have.class', 'product-name')
    .wait(3000)
  }

  /*closeOverlay()
   {    

        //close the overlay
        //cy.get('#yie-close-button-b294f0b8-31fc-5d02-86e2-ac21c05a2294').click()
        cy.get('#yie-close-button-a2642441-2501-5ab9-bdd5-385352be503f').click()
    }*/

    //Adding product to cart (click on "Add to Beg" CTA)
      AddToBeg()
    {
      cy.get('#add-to-cart')
      .click()
      .wait(3000)
      //cy.contains('1').should('have.class', 'mini-cart a > span')

    }


    //click on cart button and then click  to "Proceed to checkout" link
    cart()
    {
      cy.get('#mini-cart a > span').trigger('mouseover')
      cy.contains('Shopping Bag').should('have.class', 'mini-cart-header')

      cy.get('#mini-cart a.mini-cart-link-checkout').click()
      //cy.contains('Checkout').should('have.class', 'checkout-login-header')
    }

  Login()
  { //click on "guest checkout" CTA
    cy.get('#dwfrm_login button[type="submit"]').click()
  }

    blankSpacesValidation() 
    {
        //enter first name  field blank
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_firstName').type(' ')
        
        //enter last name field blank
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_lastName').type(' ')
       
        //enter address field blank
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_address1').type(' ')

        //enter city field blank
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_city').type(' ')
       
        //enter zipcode field blank
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_postal').type(' ')
        
        //Enter phone field blank
        cy.get('#dwfrm_singleshipping_shippingAddress div.form-row.required.opc-phone-row > label > span:nth-child(1)').type(' ')
      
        cy.contains('This field is required.').should('have.class', 'error')
        cy.wait(3000)
    }

fillShippingForm()
{
        //enter first name  
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_firstName').type('Tester', { delay: 100 })
       
        //enter last name 
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_lastName').type('Testing', { delay: 100 })
        
        //enter address 
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_address1').type('4286  McDonald Avenue')
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
         })

        //enter city 
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_city').type('millhousen', { delay: 100 })

        //enter state
        cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_states_state').select('New York', { delay: 100 })

        //enter zipcode 
       cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_postal').type('47261', { delay: 100 })
        
        //Enter phone 
       cy.get('#dwfrm_singleshipping_shippingAddress div.form-row.required.opc-phone-row > label > span:nth-child(1)').type('8122362570', { delay: 100 })
       cy.wait(3000)
      }


shippingMethod()
   {
cy.get('#dwfrm_singleshipping_shippingAddress button[type="submit"]').click()

cy.wait(3000)
//cy.contains('Sorry, we could not find a match for your address.').should('have.class', 'header_prompt')
cy.contains('Use Original').click();
//cy.get('#dwfrm_addForm').invoke('show').click({force:true})
cy.wait(5000)
cy.url().should('include','Billing')
}

 paymentMethodValidation()
 {
       //enter "name on card" field blank
        cy.get('#dwfrm_billing_paymentMethods_creditCard_owner').type(' ')

        //enter "card number" field blank
        cy.get('#dwfrm_billing div.cc-wrapper > div.form-row.required > label > span:nth-child(1)').type(' ')

        //enter "security number" field blank
        cy.get('#dwfrm_billing_paymentMethods_creditCard_cvn').type(' ')
        
        cy.contains('This field is required.').should('have.class', 'error')
        .wait(3000)


 }

paymentMethod()
{
      //enter "name on card" 
        cy.get('#dwfrm_billing_paymentMethods_creditCard_owner').clear().type('test',{ delay: 100 })

        //enter "card number" 
        //cy.get('#dwfrm_billing div.cc-wrapper > div.form-row.required > label > span:nth-child(1)').type(this.data.cardnumber)

        //enter "Month" 
        cy.get('#dwfrm_billing_paymentMethods_creditCard_expiration_month')
         .select('June').should('have.value', '6').wait(1000)

        //enter "year" 
        cy.get('#dwfrm_billing_paymentMethods_creditCard_expiration_year')
        .select('2025').should('have.value', '2025').wait(1000)

        //enter "security number" 
        //cy.get('#dwfrm_billing_paymentMethods_creditCard_cvn').clear().type(this.data.cvv)

        cy.get('#dwfrm_billing > div.form-row.form-row-button > button').click({force:true})
        .wait(10000)
        
}


placeOrder()
{
  // Click on "place order" CTA
  cy.get('#secondary > div.form-row.right-po-btn > button').click({force:true})
    

   //cy.contains('Thank you for your order').should('have.class', 'clearfix primary-focus')
}


}
export default checkoutLogin


