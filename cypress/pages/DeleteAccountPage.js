class DeleteAccount{

    titleDeleteAccount ="//b[text()='Account Deleted!']"
    btnContinue = "a[data-qa='continue-button']"

    verifyTitleDeleteAccount(){
        cy.xpath(this.titleDeleteAccount).should('be.visible')
    }

    clickContinue(){
        cy.get(this.btnContinue).click()
    }



}
export default DeleteAccount