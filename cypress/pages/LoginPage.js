function getTitleLoggedInXpath(loggedInUser) {
    return `//a[contains(., 'Logged in as ${loggedInUser}')]`;
}

class LoginPage {

    btnLogout = "//a[contains(text(),'Logout')]"
    textDeleteAccount = " Delete Account"

    clickBtnLogOut(){
        cy.xpath(this.btnLogout).click()
    }

    clickDeleteAccount(){
        cy.contains(this.textDeleteAccount).click();
    }

    verifyLoggedIn(username) {
        const titleLoggedIn = getTitleLoggedInXpath(username);
        cy.xpath(titleLoggedIn).should('be.visible')
    }
}

export default LoginPage