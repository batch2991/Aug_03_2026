import { test,expect} from "../pages/customfixture"
import {Env} from "../playwright.config"


test("Validate for valid login",{tag:'@smoke'},async ({page,loginpage,productpage}) => {
    await page.context().clearCookies()
     await loginpage.login(Env.USERID,Env.PASSWD)
    let status = await productpage.verifyheading()
    await expect(status).toBeTruthy()
    await productpage.logout()
})
test("validate for invalid login", {tag:'@smoke'},async ({page,loginpage}) => {
    await page.context().clearCookies()    
    await loginpage.login(Env.USERID,"123456")
    let msg = await loginpage.getErrormsg()
    expect(msg).toContain("Username and password do not match")
})