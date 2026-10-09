import { Page, TestInfo } from "@playwright/test";

export async function takescreenshot(page:Page,testinfo:TestInfo,stepname:string)
{
    let image1=await page.screenshot({fullPage:true})
     testinfo.attach(stepname,{
          body:image1,
          contentType:'image/png'
     })
}