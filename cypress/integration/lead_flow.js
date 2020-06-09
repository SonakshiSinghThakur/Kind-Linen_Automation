const data=require('../fixtures/Prospect.json')
describe('Lead_flow', () =>{


   
    it('Verify Welcome_Screen',  () =>{
        cy.visit(data.Lead_url)
        cy.contains('Hey There')
        .should('be.visible')
        cy.contains('price quote for a wholly soul-cleansing').should('be.visible')
        cy.contains('alternative for your linen needs').should('be.visible')
        cy.get('.MuiInputBase-input').type(data.UserName)
        cy.contains('Begin').should('be.enabled').click()
        cy.log('clicked on Begin button')
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiTypography-root').click()
        cy.wait(1000)

    })

    it('Verify search functionality',  () =>{  
       cy.get('.MuiInputBase-input').type('blac')
       cy.wait(1000)
       cy.log('Searching product')     //search functionality
       cy.get('.MuiFab-label').eq(0)
       .click()
       cy.get('.MuiInputBase-input').clear() 
    })
    it('Adding Products to cart from list',  () =>{
        cy.get('.MuiFab-label').eq(2)
        .click()
        cy.wait(1000)
        cy.log('Selected two products from list')
        cy.contains('Quote Me').click()
        cy.log('Successfully clicked on Quote Me')
        cy.wait(2000)
    })
    it('Verify Cart page',  () =>{

        cy.contains('How many do you need weekly?')
        .should('be.visible')
        cy.log('How many do you need weekly? message is displayed') 
        cy.contains('Hit us with your best shot')
        .should('be.visible')
        cy.log('Hit us with your best shot message is displayed') 
        cy.contains('Weekly Usage').should('be.visible')
        cy.log('Weekly usage is displayed')
    })  
    it('Verify the quotation of selected Products',  () =>{
      
        cy.get('.MuiInputBase-input.MuiInput-input').eq(0).type('0')
        cy.log('Edited the quantity')
        cy.contains('YOU PAY').should('be.visible')
        cy.log('Total amount is displayed')
        cy.contains('Next').click()
        cy.log('Clicked on Next button')
        cy.wait(5000)
    })
    it('Verify Tango_screen',  () =>{ 
        cy.contains('Ready to Tango?')
        .should('be.visible')
        cy.log('Ready to Tango? message is displayed')
        cy.get('input[type="radio"]').check(['Yes'])
        cy.contains("Fucking A! If you'll give us your digits")
        .should('be.visible')
     
    })
   it("When select Yeah,Let's do it",  () =>{ 
       cy.contains("Fucking A! If you'll give us your digits")
        .should('be.visible')
       cy.contains("we'll get this ball rolling...")
       .should('be.visible')
       cy.get('input[name="OrganizationName"]')
       .type (data.OrganizationName)
       cy.log('Entered Organization Name')
       cy.get('input[name="ContactName"]')
       .should('have.value', data.UserName)
       cy.log('Checked User name')
       cy.get('input[name= "MobileNumber"]')
       .type(data.MobileNumber)
       cy.log('Entered Mobile NUmber')
       cy.get('input[name="Email"]')
       .type(data.Email)
       cy.log('Entered Email id')
       cy.get(' img[alt="Back Button"]')
       .should('be.visible')
       cy.log('Back button is visible')
       cy.contains('Submit').click()
       cy.log('Clicked on Submit button')
       cy.wait(2000)
       
      })
 
 
 
   it("Verify Success_screen",  () =>{ 
        cy.contains('Swell!!')
        .should('be.visible')
        cy.contains("We can't wait to get started!")
        .should('be.visible')
        cy.contains('Eric is going to hit you up soon to discuss important details')
        .should('be.visible')
        cy.contains(data.AdminName)
        .should('be.visible')
        cy.contains(data.Admin_Id)
        .should('be.visible')
        cy.contains(data.AdminNumber)
        .should('be.visible')
        cy.log("Eric's details should be displayed")
        cy.contains('Refer a Friend')
        .click() 
 
        })
 
 
   it("Verify Refer_a_Friend_screen",  () =>{ 
         cy.contains('Sweet! Preach it!')  
         .should('be.visible')
         cy.log('Sweet! Preach it! message to be displayed')
         //cy.get(':nth-child(1) > .form_field > .MuiGrid-root ') 
        // .should('have.value','Sonakshi Singh')
         //cy.log('Sonakshi Singh  to be displayed in Your Name')
         cy.get(':nth-child(2) > .form_field .MuiGrid-root')
         .type(data["Friend's Name"])
         cy.get(':nth-child(3) > .form_field > .MuiGrid-root ')
         .type(data.MobileNumber)
         cy.get('img[alt="Back Button"]')
         .should('be.visible')
         cy.log('Back button is visible')
         cy.contains('Text it').click()
         cy.log('Clicked on Tetx it button')
         cy.wait(2000)
        })
 
 
     it('Verify success screen after Referering a frien',  () =>{
         cy.contains('The deed is done.')
         .should('be.visible')
         cy.contains('Thanks for spreading the word!')
         cy.log('The deed is done. Thanks for spreading the word! message is displayed')
         cy.contains('Refer another Friend')
         .should('be.visible')
         cy.log('Refre Another Friend button is displayed')
         //cy.contains('Go Back to Website')
        //.should('be.visible')
        //.click()
         cy.log('Get started again option should be displayed')
        
 
     })
 
    
        
       
})