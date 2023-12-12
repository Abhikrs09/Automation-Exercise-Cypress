class SignUpLoginPage {

    tBoxLoginUserName  = 'input[data-qa="login-email"]';
    tBoxLoginPass      = "//input[@data-qa='login-password']"
    tBoxSignUpName     = '[placeholder="Name"]';
    tBoxSignUpEmail    = 'input[data-qa="signup-email"]';
    btnLogIn           = 'button[data-qa="login-button"]';
    btnSignUp          = '[data-qa="signup-button"]';
    titleLogInPage     = "//h2[text()='Login to your account']";      


    enterLoginUserName(username) {
      cy.get(this.tBoxLoginUserName).type(username);
    }
  
    enterLoginPass(password) {
      cy.xpath(this.tBoxLoginPass).type(password);
    }
  
    enterSignUpName(name) {
      cy.get(this.tBoxSignUpName).type(name);
    }
  
    enterSignUpEmail(username) {
      cy.get(this.tBoxSignUpEmail).type(username);
    }
  
    clickLoginBtn() {
      cy.get(this.btnLogIn).click();
    }
    
    clickSignUpBtn() {
      cy.get(this.btnSignUp).click();
    }
  
    verifyInSignUpLoginPage() {
      cy.xpath(this.titleLogInPage).should('be.visible');
    }
  }
  
  export default SignUpLoginPage;
  