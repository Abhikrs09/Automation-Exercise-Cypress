class HomePage 
{

    url="https://automationexercise.com/";
    btnHome = "//a[contains(text(),'Home')]";
    btnProduct = "//a[contains(text(),'Products')]";
    btnCart = "//a[contains(text(),'Cart')]";
    btnSignInLogIn = "//a[contains(text(),'Signup / Login')]";
    btnContactUs ="//a[contains(text(),'Contact us')]"
    imgHomePage = "img[alt='Website for automation practice']";
    countNoOfBtn = 'ul.nav.navbar-nav a';

    visitHomePage() {
      cy.visit(this.url);
    }
  
    clickContactUs(){
      cy.xpath(this.btnContactUs).click()
    }

    clickHome() {
      cy.xpath(this.btnHome).click();
    }
  
    clickProducts() {
      cy.xpath(this.btnProduct).click();
    }
  
    clickCart() {
      cy.xpath(this.btnCart).click();
    }
  
    clickSignUpLogin() {
      cy.xpath(this.btnSignInLogIn).click();
    }
  
    verifyInHomePage() {
      cy.get(this.imgHomePage).should('be.visible');
    }
  
    verifyNumberOfButtons(expectedCount) {
      cy.get(this.countNoOfBtn).should('have.length', expectedCount);
    }
  }
  
  export default HomePage;
  