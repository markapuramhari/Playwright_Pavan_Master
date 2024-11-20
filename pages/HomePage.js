export class HomePage {

    constructor(page) {
        this.page = page
        this.productList = "//div[@id='tbodyid']/div/div/div/h4/a"
        this.addToCartBtn = "//a[normalize-space()='Add to cart']"
        this.cart = '#cartur'
    }


    async addProductToCart(productName) {
        await this.page.waitForSelector(this.productList)
        const productsList = await this.page.$$(this.productList)
        
        for (const products of productsList) {
            if (productName === await products.textContent()) {
                await products.click()
                break
            }
        }
        await this.page.on('dialog', async dialog => {

            if (dialog.message().includes('Product added.')) {
                await dialog.accept()
            }
        })
        await this.page.click(this.addToCartBtn)
    }


    async gotoCart() {
        await this.page.click(this.cart)
    }



}