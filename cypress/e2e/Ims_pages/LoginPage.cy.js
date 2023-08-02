class Login{

    emailField = "input[placeholder='Email']";
    passwordField = "input[placeholder='Password']";
    signInBtn = "button[type*='submit']"
   
    enter_email(email){
        cy.get(this.emailField)
        .should("be.empty")
        .type(email)
    }
    enter_password(password){
        cy.get(this.passwordField)
        .should("be.empty")
        .type(password)
    }
    click_signIn_Button(){
        cy.get(this.signInBtn)
        .contains("Sign in")
        .click()
    
    }
    verify_success_message(){
        cy.get('.bg-green-100 > div.flex')
        .should("contain","Login Succesful")
        
    }

}
export default Login;