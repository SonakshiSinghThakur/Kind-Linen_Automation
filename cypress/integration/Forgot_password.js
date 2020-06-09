
const data=require('../fixtures/Test .json')
describe('Verify Forgot password?', () => 
{
    /* before(() => {
    // runs once before all tests in the bloc
    indexedDB.deleteDatabase('firebaseLocalStorageDb')
     })*/
     /*before(()=> {

     cy.fixture('Test').then((Test)  =>
      {
      this.data= Test
      })
     })*/
     
     it('Check Forgot password?', () => {
       cy.visit('https://kindlinen01.web.app/login')
       cy.get('input[name="email"]')
         .should('be.visible')
       cy.get('input[name="password"]')
         .should('be.visible')
       cy.get('button[type="button"]')
          .should('be.disabled')
       cy.get('.MuiTypography-root.jss5.MuiTypography-body1')
          .click()
       })
     it('Forgot passowrd screen_2', () => {

        cy.get('.jss236')
           .contains('Forgot Password?')
        cy.get('.jss235')
           .contains(data.Text)
        cy.get('img[alt="Back Button"]')
           .should('be.visible')
        cy.get('button[type="button"]') 
           .contains('Submit')
        cy.get('button[type="button"]') 
           .should('be.disabled')  
        cy.get('.MuiInputBase-input') 
           .type(data.email) 
        cy.get('button[type="button"]') 
           .should('be.enabled').click() 

   })
})