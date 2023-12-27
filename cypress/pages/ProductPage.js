class ProductPage{

    logoProductPage= '#sale_image'
    firstProduct = "(//img[@alt='ecommerce website products'])[1]"
    
    verifyLogoProductPage(){
        cypress.get(this.logoProductPage).should('be.visible')
    }
    




}

export default ProductPage