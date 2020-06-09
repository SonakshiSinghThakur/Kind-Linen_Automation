
const data=require('../fixtures/Admin.json')
describe('Admin_flow for View and Manage Products',() =>
{
           before(() => {
           // runs once before all tests in the bloc
            indexedDB.deleteDatabase('firebaseLocalStorageDb')
            })
        it('Verify  Forgot password?', () => {
              cy.visit('/')
              //cy.get('input[name="email"]').type(data.Invalid_Id1)
              cy.get('.MuiTypography-root.jss5.MuiTypography-body1')
              .click()

            })
        it('Forgot passowrd screen_2', () => {
               //Forgot password
          
                 cy.contains('Forgot Password?')
                 .should('be.visible')
              
                 cy.contains(data.Text)
                .should('be.visible')
                 cy.get('img[alt="Back Button"]')
                 .should('be.visible')
                 cy.get('button[type="button"]') 
                 .contains('Submit')
                 cy.get('button[type="button"]') 
                 .should('be.disabled')  
                 cy.get('.MuiInputBase-input') 
                 .type(data.email) 
                 cy.get('img[alt="Back Button"]').click()
                 cy.wait(2000)
      
            })
      it('Verify Login with invalid email', () =>{
            //invalid email id
           
            
            cy.get('input[name="email"]').type(data.Invalid_Id1)
            cy.get('input[name="password"]').type(data.Password)
            cy.get('button[type="button"]').click()
            cy.log('Should display an error snackbar saying User account not found.Please contact administrator')

          })

      it('Verify Login with invalid Password', () =>{
            //invalid password
            cy.get('input[name="email"]').clear().type(data.EmailId)
            cy.get('input[name="password"]').clear().type(data.Invalid_Password)
            cy.get('button[type="button"]').click()
            cy.log('Should display an error snackbar saying Username or Passsword is wrong')
          })
          

      it('Verify Login with leaving email or password field empty', () =>{
            //leave any field empty 
            cy.get('input[name="email"]').clear()
            cy.get('input[name="password"]').clear().type(data.Password)
            cy.get('button[type="button"]').should('be.disabled')
            cy.log('User should not be able to login')
          
           })


      it('Verify Login with valid credentials', () =>{
          //valid credential
             cy.get('input[name="email"]').clear().type(data.EmailId)
             cy.get('input[name="password"]').clear().type(data.Password)
             cy.get('button[type="button"]').should('be.enabled')
             cy.get('button[type="button"]').click()
             cy.log('Logged in successfully')
   

           })
      it('Check the Welcome_screen', () => {
          
             cy.get(':nth-child(1) > .form_field ')
             .should('be.visible')
             cy.get(':nth-child(2) > .form_field ')
             .should('be.visible')
             cy.get(':nth-child(1) > .form_field ')
             .click()
             cy.wait(2000)

          })
      it('Check Manage_products_screen', () => {   
             cy.contains('Manage Product')
             cy.contains('View & Manage Products')
             .should('be.visible').click()
             cy.log('Clicked on View & Manage Products button')
             cy.wait(3000)
             
              
            })
      it('Add a product', () => {
              cy.contains('Add Product').click()
              cy.log('Clicked on Add product option')        
              cy.contains('Please Add Product ')
              .should('be.visible')
              cy.log('Please Add Product message is visible')
              cy.contains('Enter details')
              cy.log('Enter details message is visible')
              const fileName = 'black-cotton-napkin.jpg';
              cy.get('#icon-button-photo').attachFile('microfiber-towels.jpg');
              cy.log('Successfully uploads the image')
              cy.get('input[name="productName"]')
              .type('Microfiber Towel')
              cy.get('#category').click()
              cy.get('[data-value="BOH"]').click()
              cy.get('input[name="defaultQuantity"]').type('1,000')
              cy.get('input[name="price"]').type('$0.20')
              cy.get('#units')
              .click()
              cy.get('[data-value="Per Wash"]').click()
              cy.get('input[name="description"]').type('Perfect for polishing glasses')
              cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
              cy.wait(5000)
              cy.log("Product added successfully")
              //cy.contains('Exit without saving').click() 
              //cy.contains('Go Home').click()

             }) 

       it('Verify Delete product', () => {
              cy.scrollTo(0, 5000) 
              cy.get('button[type="button"]').eq(20)
              .click()
              cy.contains('Delete Product').click()
              cy.get('.MuiDialogActions-root > :nth-child(2)').click()
              cy.log('Product Deleted successfully ')
             
            })

       it('Modify a product', () => {

             cy.get('button[type="button"]').eq(16)
             .click()
             cy.log('Clicked on modify option')
             cy.contains('Edit Product').should('be.visible')
             cy.log('Edit Product option is displayed')
             cy.contains('Delete Product').should('be.visible')
             cy.log('Delete Product option is displayed')

             })
       it('Verify Edit product', () => {
              cy.contains('Edit Product')
              .click()
              cy.get('input[name="defaultQuantity"]').type('.00')
              cy.log('Edited the quantity')
              cy.contains('Update Product').click()
              //cy.contains('Exit without saving').click()
              //cy.contains('View & Manage Products').click()
              //cy.log('Product successfully updated')
              cy.wait(2000)
            })

            

      it('Select Generate a link option', () => {
              cy.contains('Go Home').click()
              cy.wait(2000)
              cy.contains('Generate a Link').click()
              cy.log('Clicked on Generate a link button')
              cy.wait(3000)
    
  
              })
  
  
       it('Enter organization details here', () => {
              
               
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
                cy.log('Send link to mobile number option is displayed is disabled')
                cy.get(':nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
               .should('have.text','Send link to email')
                cy.log('Send link to email option is displayed')
                cy.get('#Share-link')
                .click()
                cy.log('Successfully clicked on send icon ')
                cy.wait(1000)
                cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
               
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