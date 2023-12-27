import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/Homepage"; 
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

    it('Login With Valid Value',()=>{

        signUpLoginPage.login("abhi123@example.com","1234")
        //cy.wait(3000)
        loginPage.verifyLoggedIn('Abhishek')

    })

    it('Login with Valid UserName invalid Password',()=>{
        signUpLoginPage.login("abhi123@example.com","12345")
        // cy.wait(3000)
        signUpLoginPage.verifyInvalidLogin()
    })

    it('Login with Invalid UserName Valid Password',()=>{
        signUpLoginPage.login("abhi1@example.com","1234")
        //cy.wait(3000)
        signUpLoginPage.verifyInvalidLogin()
    })

    it('Login with Invalid UserName and Invalid Password',()=>{
        signUpLoginPage.login("abhi129@example.com","12345")
        //cy.wait(3000)
        signUpLoginPage.verifyInvalidLogin()
    })


    // it.only('Login with Empty UserName and Empty Password',()=>{
    //     signUpLoginPage.login("","")
    //     //cy.wait(3000)
    //     // signUpLoginPage.verifyInvalidLogin()
    //     cy.on('window:alert', (alertText) => {
    //         expect(alertText).to.equal('Please fill out this field.');
    //       });
    // })

    it('Login Page elements are enabled and visibled',()=>{
        signUpLoginPage.UiTestLoginUserName()
        //signUpLoginPage.UiTestLoginPassword()
        signUpLoginPage.UiTestLoginButton()

    })

   



})