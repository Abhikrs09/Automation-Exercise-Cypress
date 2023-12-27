class SignUpLoginPage {

    tBoxLoginUName  = "//input[@data-qa='login-email']";
    tBoxLoginPass      = "//input[@data-qa='login-password']"
    tBoxSignUpName     = '[placeholder="Name"]';
    tBoxSignUpEmail    = 'input[data-qa="signup-email"]';
    btnLogIn           = 'button[data-qa="login-button"]';
    btnSignUp          = '[data-qa="signup-button"]';
    titleLogInPage     = "//h2[text()='Login to your account']";    
    textInvalidLogin   = "//p[text()='Your email or password is incorrect!']";  
    textUsernameExits  = "//p[text()='Email Address already exist!']"


    verifyUserNameExits(){
      cy.xpath(this.textUsernameExits).should('be.visible')
    }

    verifyInvalidLogin(){
      cy.xpath(this.textInvalidLogin).should('be.visible')
    }


    testEnabledVisibled(element){
      cy.get(element).should('be.visible').and('be.enabled');
    }

    UiTestLoginUserName(){
      this.testEnabledVisibled(this.tBoxLoginUserName)
    }

    UiTestLoginPassword(){
      this.testEnabledVisibled(this.tBoxLoginPass)
    }

    UiTestLoginButton(){
      this.testEnabledVisibled(this.btnLogIn)
    }

    enterLoginUserName(email) {
      cy.xpath(this.tBoxLoginUName).type(email);
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

    login(username, password) {
      this.enterLoginUserName(username);
      this.enterLoginPass(password);
      this.clickLoginBtn();
    }

    signUp(name,username){
      this.enterSignUpName(name);
      this.enterSignUpEmail(username);
      this.clickSignUpBtn();
    }

  }
  
  export default SignUpLoginPage;
  