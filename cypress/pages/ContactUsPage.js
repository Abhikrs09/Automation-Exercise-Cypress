class ContactUsPage{

    titleConatctUs ="h2.title"
    tBoxName = "input[name='name']"
    tBoxEmail = "input[name='email']"
    tBoxSubject = "input[name='subject']"
    tAreaMessage = "textarea[name='message']"
    btnChooseFile = "input[name='upload_file']"
    btnSubmit = "input[type='submit']"
    titleSucessMessage = '.status'
    uploadFile = "input[type='file']"

    uploadFiles(fileloc){
        cy.get(this.uploadFile).selectFile(fileloc)
    }

    VerifySucessMessage(){
        cy.get(this.titleSucessMessage).should('be.visible')
    }

    VerifyTitleContactUs(){
        cy.get(this.titleConatctUs).should('be.visible')
    }

    EnterName(name){
        cy.get(this.tBoxName).type(name)
    }

    EnterEmail(email){
        cy.get(this.tBoxEmail).type(email)
    }

    EnterSubject(subject){
        cy.get(this.tBoxSubject).type(subject)
    }

    EnterMessage(msg){
        cy.get(this.tAreaMessage).type(msg)
    }

    CilckBtnSubmit(){
        cy.get(this.btnSubmit).click()
    }






}
export default ContactUsPage