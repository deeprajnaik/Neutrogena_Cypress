/// <reference types="Cypress" />
class NCart {

    //stdPrice = cy.get('.product-tile[data-itemid="6811125"] > .product-pricing .product-standard-price')
    //salePrice = cy.get('.product-tile[data-itemid="6811125"] > .product-pricing .product-sales-price')

    visit() {
        cy.visit('https://www.neutrogena.com/skin/skin-cleansers')
    }

    verifyPageTitle() {
        cy.title().should('eq','Facial Cleansers & Skin Toners | Neutrogena®')
    }

    /*closeOverlay() {
       //close the overlay   
       cy.wait(10000)
       cy.get('#yie-close-button-5f0efd87-bef8-5eee-b662-e569616a57a7').click()
       //cy.get('#yie-close-button-a2642441-2501-5ab9-bdd5-385352be503f').click()
       //cy.get('#yie-close-button-4d886615-9976-591f-b671-062c4498026f').click()
       
    }*/

    addProductToCart() {
        cy.get('.product-tile[data-itemid="6811125"] > .product-detail .tile-buttons .add-to-cart').click()
    }

    navigateToCart() {
        cy.get('.shopping-bag').click()
    }

    continueShopping() { 
        cy.wait(2000)
        cy.get('.button-text.button-back').click()

        //cy.title().should('eq','Facial Cleansers & Skin Toners | Neutrogena®')
    }

    checkout() { 
        cy.get('.cart-actions-top .cart-action-checkout .extra-large').click()
        cy.wait(5000)
        cy.get('.ui-dialog-titlebar-close').click()
    }

    paypalCheckout() { 
        cy.get('.cart-actions-top .cart-action-checkout > a').click(), {
            onBeforeLoad(win) {
                cy.stub(win, 'open')
            }
        }
        cy.window().its('open').should('be.called')

        /*cy.wait(20000)
        cy.window().then((win) => {

        })
        //cy.get('#paypalLogo').should('be.visible')
        //cy.contains('#paypalLogo').should('be.visible') //Stmt fails
        cy.get('#zoid-paypal-checkout-bfcb0454aa .paypal-checkout-modal .paypal-checkout-message').contains('secure PayPal browser')
        //cy.contains('#zoid-paypal-checkout-bfcb0454aa .paypal-checkout-modal .paypal-checkout-message')
        */
    }

    removeItem() {
        cy.get('#cart-table .button-text').click()    
    }

    verifyEmptyCart() { 
        //cy.get('h1').should('eq','YoYur Shopping Bag is Currently Empty')
        cy.get('h1').contains('Your Shopping Bag is Currently Empty') 
    }

    // Click login link from empty cart page
    verifyEmptyCartLogin() {
        cy.get('.cart-empty > div > p > a').click() //Click Login link
        //cy.get('.account-login').should('eq','My Account Login')
        cy.get('.account-login').contains('My Account Login')
    }

    //Click continue shopping link form empty cart page 
    verifyEmptyCartContinueShopping() { 
        cy.get('#continue-shopping .button-text').click()
    }

    //Click Login button from Skin care category
    verifyEmptyCartModuleLogin() {
        cy.get('.pt-cart-content > li:first-child > a').click()
    }

    //Click Create Account button from Skin care category 
    verifyEmptyCartModuleCreate() { 
        cy.get('.pt-cart-content > li:nth-child(2) > a').click()
    }

    //Click Sun Safe Learn More button from Skin care category 
    verifyEmptyCartModuleSunSafe() { 
        cy.get('.pt-cart-content > li:last-child > a').click()
    }

    clickEditDetails() {
        cy.get('.item-edit-details > a').click()
        cy.wait(2000)
        //cy.get('.ui-dialog-titlebar-close .ui-icon-closethick').click()
        //cy.get('button[title="Close"]').click()
        //cy.get('.ui-dialog-titlebar > button .ui-button-icon').click()
        //cy.get('.ui-widget-content.ui-front .ui-dialog-titlebar > button').click()
        //cy.get('.ui-ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-draggable').click()
        //cy.get('div[tabindex="-1"] .ui-dialog-titlebar[type="button"]').click()
        //cy.get('div[role="dialog"]').click()
        //cy.get('.ui-front[role="dialog"]').click()
        //cy.get('body > div.ui-front[role="dialog"] > div.ui-dialog-titlebar > button > span.ui-icon-closethick').click()
        cy.get('#add-to-cart').click()
        cy.wait(2000)
    }

    verifyInvalidPromoCode() { 
        //cy.get('#dwfrm_cart_couponCode').clear().type('Test123')
        cy.get('#dwfrm_cart_couponCode').type('Test123')
        cy.get('#add-coupon').click()
        cy.get('.error').contains('Coupon code')
    }

    changeQuantity() { 
        //cy.get('.item-quantity .select-style').click()
        //cy.get('.item-quantity .select-style .qty-select > [value="2"]').click()
        //cy.get('.item-quantity .select-style').select('.item-quantity .select-style .qty-select > [value="2"]')
        cy.get('.item-quantity .select-style .qty-select').select('2').should('have.value', '2')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.wait(4000)
        cy.get('.item-quantity .select-style .qty-select').select('1').should('have.value','1')
        cy.wait(10000)
    }

    verifyPricePresent() {
        //price = cy.get('.item-price .price-sales').text()
        cy.get('.price-unadjusted-special').contains('$')
    }

    addMultipleProductToCart() {
        cy.get('.product-tile[data-itemid="6811125"] > .product-detail .tile-buttons .add-to-cart').click()
        cy.wait(3000)
        cy.get('.product-tile[data-itemid="6810123"] > .product-detail .tile-buttons .add-to-cart').click()
        cy.wait(3000)
        cy.get('.product-tile[data-itemid="6805640"] > .product-detail .tile-buttons .add-to-cart').click()
    }

    /*
    getPrice() { 
        item-price = cy.get('.cart-row .item-total .price-total').text()
    }
    */

    verifyPriceAndSubtotal() {
        cy.get('.price-unadjusted-special').then(($price1) => {
            const a = $price1.text()
            cy.log(a)
            cy.get('.order-subtotal > td:nth-child(2)').should(($price2) => {
                expect($price2.text()).eq(a)
            })
        })

    }

}

export default NCart