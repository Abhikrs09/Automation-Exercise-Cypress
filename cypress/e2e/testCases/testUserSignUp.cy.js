import HomePage from "../../pages/Homepage"; 
import SignUpLoginPage from "../../pages/SignUpLoginPage";
import SignUpPage from "../../pages/SignUpPage"
import LoginPage from "../../pages/LoginPage";
import { generateRandomEmail, generateRandomUsername, generateRandomPassword } from '../../utils/randomDataGenerator';



describe('New User SignUp', () => {


  const homePage = new HomePage();
  const signUpLoginPage = new SignUpLoginPage();
  const signUpPage = new SignUpPage();
  const loginPage = new LoginPage();
  let username, password, email;

  beforeEach(() => {
    homePage.visitHomePage();
    username = generateRandomUsername();
    password = generateRandomPassword();
    email = generateRandomEmail();
  });

  it("T001 Create new User", () => {
    
    homePage.clickSignUpLogin()
    signUpLoginPage.verifyInSignUpLoginPage();
    // cy.fixture("SignUpData").then((user)=>{
    //   signUpLoginPage.signUp(user.name,user.email)
    // })

    //  signUpLoginPage.signUp("abhi","abhi1234@example.com")

    signUpLoginPage.signUp(username,email)
    cy.wait(3000)

    signUpPage.selectGender("male")
    signUpPage.EnterName(username)
    signUpPage.EnterPass(password)
    signUpPage.SelectDay("16")
    signUpPage.SelectMonth("March")
    signUpPage.SelctYear("1999")
    signUpPage.SelectNewLetter()
    signUpPage.SelectSpecialOffer()
    signUpPage.EnterFirstName("Abhishek")
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

    cy.wrap({ email, password }).as('credentials');

  });

  it("Verify Home Page buttons", () => {
    homePage.verifyInHomePage();
    homePage.verifyNumberOfButtons(8); // Change the expected count accordingly
  });

  it('Logout Username',()=>{
    
    cy.get('@credentials').then(credentials => {
      const { email, password } = credentials;
      signUpLoginPage.login(email, password);
      loginPage.verifyLoggedIn('abhiabhishek');
      loginPage.clickBtnLogOut();
      homePage.verifyInHomePage();
    }); 

    //signUpLoginPage.login("abhi1234@example.com","1234")
    // loginPage.verifyLoggedIn('abhiabhishek')
    // loginPage.clickBtnLogOut()
    // homePage.verifyInHomePage()

})

it("Register User with the existing credentials", () => {
  cy.get('@credentials').then(credentials => {
    const { email, password } = credentials;
    signUpLoginPage.login(email, password);
  });
  signUpLoginPage.verifyUserNameExits();
});



  

});
