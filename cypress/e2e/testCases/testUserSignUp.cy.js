import HomePage from "../../pages/HomePage"; 
import SignUpLoginPage from "../../pages/SignUpLoginPage";
import SignUpPage from "../../pages/SignUpPage"


describe('New User SignUp', () => {


  const homePage = new HomePage();
  const signUpLoginPage = new SignUpLoginPage();
  const signUpPage = new SignUpPage();

  beforeEach(() => {
    homePage.visitHomePage();
  });

  it("T001 Create new User", () => {
    
    homePage.clickSignUpLogin()
    signUpLoginPage.verifyInSignUpLoginPage();

    signUpLoginPage.enterSignUpName('abhi');
    signUpLoginPage.enterSignUpEmail('abhi123@example.com');

    signUpLoginPage.clickSignUpBtn();

    cy.wait(3000)

    signUpPage.selectGender("male")
    signUpPage.EnterName("abhishek")
    signUpPage.EnterPass("1234")
    signUpPage.SelectDay("16")
    signUpPage.SelectMonth("March")
    signUpPage.SelctYear("1999")
    signUpPage.SelectNewLetter()
    signUpPage.SelectSpecialOffer()
    signUpPage.EnterFirstName("abhishek")
    signUpPage.EnterLastName("Kumar")
    signUpPage.EnterCompany("abc")
    signUpPage.EnterAddress1("sexdcfvgbhnjm")
    signUpPage.EnterAddress2("xdcfvgbhj")
    signUpPage.SelectCounter("India")
    signUpPage.EnterState("jhdfg")
    signUpPage.EnterCity("dfgh")
    signUpPage.EnterZipCode("23456")
    signUpPage.EnterMobileNumber("234567")
    signUpPage.ClickCreateAccount()
    signUpPage.verifyAccountCreated()


  });

  it("Verify Home Page buttons", () => {
    homePage.verifyInHomePage();
    homePage.verifyNumberOfButtons(8); // Change the expected count accordingly
  });
});
