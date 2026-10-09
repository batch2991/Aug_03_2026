import { chromium } from "@playwright/test";

async function loginauth()
{
    let browser=await chromium.launch()
    let context=await browser.newContext()
    let page=await context.newPage()

    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByRole("button",{name:'Login'}).click()
    await page.waitForTimeout(5000)
    await context.storageState({path:"./loginsession.json"})
    await browser.close()


}
export default loginauth