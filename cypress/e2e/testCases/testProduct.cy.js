import HomePage from "../../pages/Homepage";
import SignUpLoginPage from "../../pages/SignUpLoginPage";
import SignUpPage from "../../pages/SignUpPage";
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
    homePage.clickSignUpLogin();
    username = generateRandomUsername();
    password = generateRandomPassword();
    email = generateRandomEmail();
  });

  it("T001 Create new User", () => {
    
    signUpLoginPage.verifyInSignUpLoginPage();

    signUpLoginPage.signUp(username, email);
    cy.wait(3000);

    // ... (other signup steps)

    // Set credentials as environment variables
    Cypress.env('credentials', { email, password });
  });

  it('Logout Username', () => {
    const { email, password } = Cypress.env('credentials');
    signUpLoginPage.login(email, password);
    loginPage.verifyLoggedIn('abhiabhishek');
    loginPage.clickBtnLogOut();
    homePage.verifyInHomePage();
  });

  it("Register User with the existing credentials", () => {
    const { email, password } = Cypress.env('credentials');
    signUpLoginPage.login(email, password);
    signUpLoginPage.verifyUserNameExits();
  });


//   it("login",() =>{

//   })

  // Other test cases...
});
