/// <reference types="Cypress" />

//import GLogin from '../neutrogena/GLogin'
import Register from  '../neutrogena/Register'
import Login from '../neutrogena/login'
import Homepage from '../neutrogena/NTGHomepage'
import Product from '../neutrogena/productpage'
import cart from  '../neutrogena/cart'
import search from  '../neutrogena/search'
import CheckoutGuest from  '../neutrogena/CheckoutProduct-(Guest_user)'
import CheckoutLogin from  '../neutrogena/CheckoutProduct-(login_user)'

describe('Neutrogena', function () {

 
  
    const register = new Register()
    const lp = new Login()
    const homepage = new Homepage()
    const pg = new Product()
    const scart = new cart()
    const se = new search()
    const check = new CheckoutGuest()
    const checklogin = new CheckoutLogin()
 


  beforeEach(function(){
  cy.fixture('credentials').then(function(data){
    this.data=data
  cy.fixture('creditcard').then(function(data){
    this.data=data

  })
  })
})
   

 beforeEach(() => {
    cy.viewport(1366 , 768)
    //Cypress.Cookies.preserveOnce('PHPSESSID')
  })


  it('Register ', function (){

    register.visit()
    register.verifyPageTitle()
    //register.closeOverlay()
    register.validationMessageEmptyFields()
    register.blankSpacesValidation()
    register.passwordValidation()
    register.invalidDataValidation()
    register.fillRegistrationForm()


  })

 
it('login', function (){
  
    //login into the neutrogena site
    lp.visit()
    lp.verifyPageTitle()
    lp.profileIcon()

    //blank field submission
    lp.submit()
    lp.verifyValidationMessage()

    //Incorrect email filed submission
    lp.fillIncorrectEmail()
    lp.submit()
    lp.verifyIncorrectEmailField()
  
    //Incorrect password filed submission
    lp.fillIncorrectPassword()
    lp.submit()
    lp.verifyIncorrectCredentialsField()


    //Correct email and password filed submission
    cy.get('#dwfrm_login_username').clear().type(this.data.email)
    cy.get('#dwfrm_login_password').clear().type(this.data.password)
    lp.submit()
    //lp.verifyLoginPageTitle()
    //cy.get('.large').click()
    })


  it('homepage', function () {
    
      homepage.visit()
      homepage.verifyPageTitle()
      //homepage.verifyOverlay()
      homepage.verifyHeaderMenu()
      homepage.verifyMenuLinks()
      //homepage.verifyBanner()
      //homepage.verifyCarousels()
      //homepage.verifyallsections()
      homepage.verifyFootersection()
     })

  it('viewing product', function (){
    
    pg.visit()
    pg.verifyPageTitle()
    //pg.closeOverlay()
    pg.menuItem()
    pg.selectProduct()
    //pg.closeOverlay2()
    pg.reviewProductImage()
   // pg.VerifyCheckBox()
    pg.numberOfProduct()
    pg.descriptionTab()
    pg.hoverReview()
    pg.searchReview()
    pg.chooseReview()
    pg.bottomToTop()

  }) 
  

  it('cart ', function (){
    
    //Verify cart features
    scart.visit()
    scart.verifyPageTitle()
    //scart.closeOverlay()
    scart.addProductToCart()
    scart.navigateToCart()
    scart.verifyPricePresent()
    //Temporary price comparison
    scart.verifyPriceAndSubtotal()

    scart.changeQuantity()
    scart.continueShopping()
    scart.navigateToCart()
    scart.checkout()
    //scart.paypalCheckout() //Facing error with new window 
    scart.clickEditDetails()
    scart.verifyInvalidPromoCode()
    scart.removeItem() 

   

  })

it('search', function (){
    
    

    se.visit()
    //se.closeOverlay()
    se.verifyPageTitle()
    se.inValidSearch()
   // se.VerifyPopup()
    se.verifySearch()
    se.refineDropdown()
    se.bestSellingDropdown()
}) 


it('CheckoutGuest', function (){
    
    
    check.visit()
    check.verifyPageTitle()
    //ck.closeOverlay()
    check.menuItem()
    check.selectProduct()
    //ck.closeOverlay()
    check.AddToBeg()
    check.cart()
    check.guestuser()
    check.blankSpacesValidation() 
    check.fillShippingForm()
    check.shippingMethod()
    check.EmailBlankSpacesValidation()
    check.fillEmailField()
    check.paymentMethodValidation()
    cy.get('#dwfrm_billing div.cc-wrapper > div.form-row.required > label > span:nth-child(1)').type(this.data.cardnumber)
    cy.get('#dwfrm_billing_paymentMethods_creditCard_cvn').clear().type(this.data.cvv)
    check.paymentMethod()
    check.placeOrder()
  
    })

  it('CheckoutLogin', function (){
    
    checklogin.visit()
    checklogin.verifyPageTitle()
    //ck.closeOverlay()
    checklogin.menuItem()
    checklogin.selectProduct()
    //ck.closeOverlay()
    checklogin.AddToBeg()
    checklogin.cart()
    cy.get('#dwfrm_login_username').clear().type(this.data.email)
    cy.wait(2000)
    cy.get('#dwfrm_login_password').clear().type(this.data.password)
    checklogin.Login()
    checklogin.blankSpacesValidation() 
    checklogin.fillShippingForm()
    checklogin.shippingMethod()
    checklogin.paymentMethodValidation()
    cy.get('#dwfrm_billing div.cc-wrapper > div.form-row.required > label > span:nth-child(1)').type(this.data.cardnumber)
    cy.get('#dwfrm_billing_paymentMethods_creditCard_cvn').type(this.data.cvv)
    checklogin.paymentMethod()
    checklogin.placeOrder()

})

})
