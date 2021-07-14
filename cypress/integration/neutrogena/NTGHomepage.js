// <reference types="Cypress" />
class Homepage {
    visit() {
        cy.visit('https://www.neutrogena.com/')
    }
    verifyPageTitle() {
        cy.title().should('eq', 'Skin Care Products for Healthier Skin | Neutrogena®')
    }
    /*verifyOverlay() {
        cy.wait(20000)
        cy.get('#yie-close-button-7cea8ac5-7aa9-5b0a-8a49-b7f13bd3db8a').click({ force: true })
        
     
    }*/
    verifyHeaderMenu() {
        cy.get('#q').click({ force: true })
        cy.get(':nth-child(7) > .user-account > .icon').click()
        cy.wait(2000)
        cy.get('.neutrogena-logo').click()
         cy.wait(2000)
        cy.get('.mini-cart-link > .icon > use').click()
        cy.wait(2000)
        cy.get('.neutrogena-logo').click()
    }
    verifyMenuLinks() {
        cy.get('[data-listid="list-skin"]>.nav-topcat-link').click()
        cy.title().should('eq', 'Skincare Products for Healthy, Glowing Skin | NEUTROGENA®')

        cy.get('[data-listid="list-sun"]>.nav-topcat-link').click()
        cy.title().should('eq', 'Sunscreen and Sun Protection Products | NEUTROGENA®')
        //cy.wait(10000)
        //cy.get('#yie-close-button-1a308ae8-3d17-549f-999c-3590ca4dac3a').click()

        cy.get('[data-listid="list-makeup"]>.nav-topcat-link').click({ force: true })
        cy.title().should('eq', 'Makeup & Cosmetic Products | Neutrogena®')
        
        cy.get('[data-listid="list-haircare"]>.nav-topcat-link').click()
        cy.title().should('eq', 'Shampoo, Conditioner, Hair Care Products | NEUTROGENA®')

        //cy.get('[data-listid="list-our-promise"]>.nav-topcat-link').click()
        //cy.title().should('eq', 'Our Commitment to Sustainability & The Planet | NEUTROGENA®')
        
        cy.get('[data-listid="list-skin360"]>.nav-topcat-link').click()
        cy.title().should('eq', 'Neutrogena Skin360™ Web App')
        cy.go("back")
        //cy.get('[href="https://www.neutrogena.com/the-bar.html"]>img').click()
        //cy.title().should('eq', 'The Bar: Skincare Tips, Tricks & Products | NEUTROGENA®')
        cy.get('.primary-logo > a > .neutrogena-logo').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            cy.wait(7000)
        })
    }
    /*verifyBanner() {
        cy.get('#main div:nth-child(2) > div > a > picture > img')
        cy.wait(1000)

    }*/
    /*verifyCarousels() {
        //cy.wait(2000)
        //cy.get('#carousel-tab-1').click()
        cy.wait(8000)
        cy.get('#home-lazy-prod-carousel-3 > button[type="button"].slick-next.slick-arrow').click()
        cy.wait(5000)
        cy.get('#home-lazy-prod-carousel-3 > button[type="button"].slick-prev.slick-arrow').click()
        cy.get('#carousel-tab-2').click({ force: true })
        cy.wait(2000)
        cy.get('#home-lazy-prod-carousel-3 > button[type="button"].slick-next.slick-arrow').click()
        cy.wait(7000)
        cy.get('#home-lazy-prod-carousel-3 > button[type="button"].slick-prev.slick-arrow').click()
        cy.wait(1000)
        cy.get('#carousel-tab-3').dblclick({ force: true })  //.click({ force: true })
        cy.wait(7000)
        cy.get('#home-lazy-prod-carousel-3 > button[type="button"].slick-next.slick-arrow').click()
        cy.wait(2000)
        cy.get('#home-lazy-prod-carousel-3 > button[type="button"].slick-prev.slick-arrow').click({ force: true })
    }
verifyallsections() {
        cy.get('.modh-byprice > .clp-columns > h2')
        cy.wait(1000)
        cy.get('.mod-h-bypersona > .clp-columns > h2')
        cy.wait(1000)
        cy.get('.olapic-slider-cta')
        cy.get('.olapic-nav-next').click()
        cy.wait(2000)
        cy.get('.olapic-nav-prev').click()
        cy.get('.olapic-see-all > a').click()
        cy.get('.neutrogena-logo').click()
        cy.wait(2000)
        //cy.get('.olapic-action-button.olapic-upload a').click() //share your glow section will have unique ids
        //cy.wait(2000)
        //cy.get('.modal-header > .close').click()
    }*/
    verifyFootersection() {
        cy.get(':nth-child(1) > h4 > .btn-invisible > strong')
        cy.get(':nth-child(2) > h4 > .btn-invisible > strong')
        cy.get(':nth-child(1) > h4 > strong')
        cy.get('.footer-link-section > h4 > strong')
        cy.get('.footer-col-1 > :nth-child(1) > .email-footer-signup')
    }
}
export default Homepage