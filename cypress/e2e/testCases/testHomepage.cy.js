import HomePage from "../../pages/Homepage"; 
import SignUpLoginPage from "../../pages/SignUpLoginPage";
import LoginPage from "../../pages/LoginPage";
import DeleteAccount from "../../pages/DeleteAccount";



describe("Login Homepage",()=>{

    const homePage = new HomePage();
    const signUpLoginPage = new SignUpLoginPage();
    const loginPage = new LoginPage();
    const deleteAccount = new DeleteAccount();
    

  beforeEach(() => {
    homePage.visitHomePage();
    homePage.clickSignUpLogin()
    signUpLoginPage.login("abhi123@example.com","1234")
    loginPage.verifyLoggedIn('Abhishek')
  });

    it('Log Out Button',()=>{
        loginPage.clickBtnLogOut()
        homePage.verifyInHomePage()
    })

    it('Delete Account',()=>{
        loginPage.clickDeleteAccount()
        deleteAccount.verifyTitleDeleteAccount()
        deleteAccount.clickContinue()
        homePage.verifyInHomePage()
        
    })
})