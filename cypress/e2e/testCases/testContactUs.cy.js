import HomePage from "../../pages/Homepage"; 
import ContactUsPage from "../../pages/ContactUsPage";

describe("ContactUs tests",()=>{

    const homePage = new HomePage();
    const contactUs = new ContactUsPage();
    
    beforeEach(()=>{

        homePage.visitHomePage();
        homePage.clickContactUs()
    })

    it("contact Us without attaching files",()=>{

        contactUs.VerifyTitleContactUs()
        contactUs.EnterName("abhi")
        contactUs.EnterEmail("sd@dfg.rt")
        contactUs.EnterSubject("sdfghj")
        contactUs.EnterMessage("sdfghj")
        contactUs.CilckBtnSubmit()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('Press OK to proceed!');
           })

        contactUs.VerifySucessMessage()
        
    })

    it.only("Contact Us Attaching files",()=>{

        contactUs.VerifyTitleContactUs()
        contactUs.EnterName("abhi")
        contactUs.EnterEmail("sd@dfg.rt")
        contactUs.EnterSubject("sdfghj")
        contactUs.EnterMessage("sdfghj")
        contactUs.uploadFiles("cypress\fixtures\coverLetter.docx.pdf")
        cy.wait(3000)
        contactUs.CilckBtnSubmit()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('Press OK to proceed!');
           })

        contactUs.VerifySucessMessage()
    })

    



})