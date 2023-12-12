import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage"; 
import SignUpLoginPage from "../../pages/SignUpLoginPage";



describe("Login Test case ",()=>{

    const homePage = new HomePage();
    const signUpLoginPage = new SignUpLoginPage();
    const loginPage = new LoginPage()

    beforeEach(()=>{
        homePage.visitHomePage()
        homePage.clickSignUpLogin()
        signUpLoginPage.verifyInSignUpLoginPage();
    })

    it('Login With Single Value',()=>{

        signUpLoginPage.enterLoginUserName("abhishek@google.com")
        signUpLoginPage.enterLoginPass("Abhishek")
        signUpLoginPage.clickLoginBtn()
        cy.wait(5000)
        loginPage.verifyLoggedIn('Abhishek')

    })
})