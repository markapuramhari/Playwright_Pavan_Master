export class CartPage {

    constructor(page) {
        this.page = page
        this.noOfProducts = "//tbody[@id='tbodyid']/tr/td[2]"
    }

    async checkProductInCart(productName) {
        await this.page.waitForSelector(this.noOfProducts)
        const productsInCart = await this.page.$$(this.noOfProducts)

        for (const products of productsInCart) {
            console.log(await products.textContent())

            if (productName === await products.textContent()) {
                return true
            }

        }


    }


}