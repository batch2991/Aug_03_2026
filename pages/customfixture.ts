import {test as t1} from "@playwright/test"
import { LoginPage } from "./LoginPage"
import { ProductsPage } from "./ProductPage"
import { CartPage } from "./CartPage"
import {Env} from "../playwright.config"

interface MyFixture
{
    loginpage:LoginPage
    productpage:ProductsPage
    cartpage:CartPage
}
export const test=t1.extend<MyFixture>({

    loginpage:async({page},use)=>{
         let login=new LoginPage(page)
         await login.openURL(Env.URL)
         use(login)
         console.log("After loginpage fixture")
    },
    productpage:async({page},use)=>{
        let product=new ProductsPage(page)
        product.openURL(Env.homepage)
        use(product)
    },
    cartpage:async({page},use)=>{
        let cart=new CartPage(page)
        use(cart)
    }
})
export {expect} from "@playwright/test"