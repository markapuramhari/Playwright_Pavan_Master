import {Page, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {HomePage} from '../pages/HomePage'
import {CartPage} from '../pages/CartPage'

export class PageManager{

    private readonly page:Page
    private readonly loginPage:LoginPage
    private readonly homePage:HomePage
    private readonly cartPage:CartPage

    constructor(page:Page){
        this.page=page
        this.loginPage=new LoginPage(this.page)
        this.homePage=new HomePage(this.page)
        this.cartPage=new CartPage(this.page)
    }

    onLoginPage(){
        return this.loginPage
    }

    onHomePage(){
        return this.homePage
    }

    onCartPage(){
        return this.cartPage
    }
}
