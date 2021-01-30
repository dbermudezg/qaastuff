
// Open browser in http://localhost:3000/shows
// Enter a text in search box with text batman
// Press button search
// Navigate to the url that is show in second card of results
// Navigate back using browser features
// Change css background color to #4a148c to card with title Batman Unlimited
// Press back button
// Make sure that input for search is empty
describe('Test 1', function(){
    it('This test does the things specified above', function(){
    let searchParam = "batman";
    cy.visit("/shows")
    cy.get('.validate').type(searchParam)
    cy.get('.btn').click({force:true})
    //pause for dramatic effect
    cy.wait(3000)
    //the wait is only to give it time, not advisable to do so irl
    cy.get(':nth-child(4) > .s12 > .card > .card-action > a.white-text').click({force:true})
    //pause for dramatic effect
    cy.wait(3000)
    })
})
describe('Test 2', function(){
    it('This test does the things specified above', function(){
    let searchParam = "batman";
    cy.visit("/shows")
    cy.get('.validate').type(searchParam)
    cy.get('.btn').click({force:true})
    //pause for dramatic effect
    cy.wait(1000)
    //cy.get(':nth-child(10) > .s12 > [data-cy=card_body] > .card-content')
    cy.get('[data-cy="card_body"]').eq(7)
    .invoke("css", "background-color", "##4a148c !important")
    .trigger('change')
    })
})
describe('Test 3', function(){
    it('This test does the things specified above', function(){
    let searchParam = "batman";
    cy.visit("/shows")
    cy.get('.validate').type(searchParam).clear().should('be.empty')         
    })
})