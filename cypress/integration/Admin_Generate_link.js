
const data=require('../fixtures/Admin.json')

describe('Admin_flow', function()
{
          before(() => {
           // runs once before all tests in the bloc
          indexedDB.deleteDatabase('firebaseLocalStorageDb')
          })

 

        it('Login with valid credentials', () => {
            //valid credentials
             cy.visit('https://kl-test-7a657.firebaseapp.com/login')
             cy.get('input[name="email"]').type(data.EmailId)
             cy.get('input[name="password"]').type(data.Password)
             cy.get('button[type="button"]').should('be.enabled')
             cy.get('button[type="button"]').click()
             cy.log('Successfully logged in')
             cy.wait(6000)
             })


        it('Select Generate a link option', () => {
            
            cy.contains('Generate a Link').click()
            cy.log('Clicked on Generate a link button')
            cy.wait(2000)

            })


         it('Enter organization details here', () => {
            
             cy.contains('Welcome Eric!').should('be.visible')
             cy.log('Welcome Eric! message is diaplyed')
             cy.contains("Let's Get Started").should('be.visible')
             cy.log("Let's Get Started message is displayed")
             cy.get('button[type="button"]')
             .should('be.disabled')
             cy.get('input[name="OrganizationName"]')
             .type(data.OrganizationName)
             cy.get('input[name="ContactName"]')
             .type(data.UserName)
             cy.get('button[type="button"]')
             .should('be.enabled')
             cy.get('input[name= "MobileNumber"]')
             .type(data.MobileNumber)
             cy.get('input[name="Email"]').type(data.Email)
             cy.log('Entered all the details')
             cy.get('button[type="button"]').click()
             cy.log('Clicked on Generate link button')
             cy.wait(3000)

         })

         it('Verify generated link screen', () => {
             // .link generated screen
              cy.get('.MuiTypography-root')
              .should('have.text','Here is your link')
              //cy.get('.jss741').click()
              cy.get('img[alt="Back Button"]')
              .should('be.visible')
              cy.log('Back button is displayed')
              cy.get('.MuiButton-label')
              .should('be.visible').click()
              cy.log('Clicked on Share button')
         })
      
         it('Check Share pop-up', () => {
              cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root')
              .should('have.text','Send link to mobile number')
              cy.log('Send link to mobile number option is displayed')
              cy.get(':nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
             .should('have.text','Send link to email')
              cy.log('Send link to email option is displayed')
              cy.get('#Share-link')
              .click()
              cy.log('Successfully clicked send icon of Send link to email option')
              cy.wait(1000)
              cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
             //cy.contains('Send').click()
              cy.log('Clicked on Send button')
              cy.wait(2000)
         })

         it('Verify Success_screen', () => {
              cy.contains('Link has been shared').should('be.visible')
              cy.log('Link has been shared text is displayed')
              cy.contains('Generate New Link').should('be.enabled')
              cy.log('Genreate a new link button is displayed')
         })
    })
  

