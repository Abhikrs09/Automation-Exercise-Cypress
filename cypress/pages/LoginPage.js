function getTitleLoggedInXpath(loggedInUser) {
    return `//a[contains(., 'Logged in as ${loggedInUser}')]`;
}

class LoginPage {




    verifyLoggedIn(username) {
        const titleLoggedIn = getTitleLoggedInXpath(username);
        cy.xpath(titleLoggedIn).should('be.visible')
    }
}

export default LoginPage