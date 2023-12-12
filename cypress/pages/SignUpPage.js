class SignUpPage {

    titleSignUpPage ="//b[text()='Enter Account Information']"
    rBtnMale = "#id_gender1"
    rBtnFemale = "#id_gender2"
    TboxName = "#name"
    tBoxEmail = "input[name='email']"
    tBoxPass = "#password"
    ddDay = "#days"
    ddMonth = "#months"
    ddYear = "#years"
    cbNewsLetter = "#newsletter"
    cbSpecialOffer ="#optin"

    tBoxFirstName = "#first_name"
    tBoxLastName = "#last_name"
    tBoxCompany = "#company"
    tBoxAddress1 = "#address1"
    tBoxAddress2 = "#address2"
    ddCountry = "#country"
    tBoxState = "#state"
    tBoxCity = "#city"
    tBoxZipCode = "#zipcode"
    tBoxMobleNo = "#mobile_number"

    titleAccountCreated = "//b[text()='Account Created!']"
    btnCreateAccount = "button[data-qa='create-account']"

    verifyAccountCreated(){
        cy.xpath(this.titleAccountCreated).should('be.visible')
    }

    selectGender(gender){
        const male = ["male", "Male", "M", "MALE",] 
        const female=["Female", "F", "female", "FEMALE"];
        if (male.includes(gender)){
            cy.get(this.rBtnMale).check().should('be.checked')
        }
        else{
            cy.get(this.rBtnFemale).check().should('be.checked')
        }
    }


    EnterName(name){
        cy.get(this.TboxName).type(name)
    }

    EnterEmail(email){
        cy.get(this.tBoxEmail).type(email)
    }

    EnterPass(pass){
        cy.get(this.tBoxPass).type(pass)
    }

    SelectDay(day){
        cy.get(this.ddDay).select(day)
    }

    SelectMonth(month){
        cy.get(this.ddMonth).select(month)
    }

    SelctYear(year){
        cy.get(this.ddYear).select(year)
    }

    SelectNewLetter(){
        cy.get(this.cbNewsLetter).check().should('be.checked')
    }

    SelectSpecialOffer(){
        cy.get(this.cbSpecialOffer).check().should('be.checked')
    }

    EnterFirstName(fname){
        cy.get(this.tBoxFirstName).type(fname)
    }

    EnterLastName(lname){
        cy.get(this.tBoxLastName).type(lname)
    }

    EnterCompany(cmpny){
        cy.get(this.tBoxCompany).type(cmpny)
    }

    EnterAddress1(add1){
        cy.get(this.tBoxAddress1).type(add1)
    }

    EnterAddress2(add2){
        cy.get(this.tBoxAddress2).type(add2)
    }

    SelectCounter(country){
        cy.get(this.ddCountry).select(country)
    }

    EnterState(state){
        cy.get(this.tBoxState).type(state)
    }

    EnterCity(city){
        cy.get(this.tBoxCity).type(city)
    }

    EnterZipCode(zip){
        cy.get(this.tBoxZipCode).type(zip)
    }

    EnterMobileNumber(mobile){
        cy.get(this.tBoxMobleNo).type(mobile)
    }

    ClickCreateAccount(){
        cy.get(this.btnCreateAccount).click()
    }

    VerifyTitleSignUpPage(){
        cy.xpath(this.titleSignUpPage).should('be.visible')
    }


}

export default SignUpPage