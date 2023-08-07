 import {Given,When,And,Then} from "@badeball/cypress-cucumber-preprocessor"
 Given("I open the application",()=>{
    cy.visit(Cypress.env('url'));

 })
 When("I enter my login credentials",()=>{
    login.enter_email(loginData.email)
    login.enter_password(loginData.password)
 })
 And("verify the data entered are visible",()=>{ 
      login.verify_success_message()
 })
 Then("click on the click on the login button",()=>{
    login.click_signIn_Button()
 })
