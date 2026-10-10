import { BasePage } from "./BasePage";

export class LoginPage extends BasePage
{
    private readonly username:string="Username"
    private readonly passwd:string="Password"
    private readonly loginbtn:string="input#login-button"

    private readonly errormsg:string="h3[data-test='error']"

    public async login(uid:string,pwd:string)
    {
        await this.page.getByPlaceholder(this.username).fill(uid)
        await this.page.getByPlaceholder(this.passwd).fill(pwd)
        await this.page.locator(this.loginbtn).click()
    }
    public async getErrormsg()
    {
       return await this.page.locator(this.errormsg).textContent()
    }
    public async rememberpwd()
    {
        console.log("code to validate pwd")
        console.log("New Word")
        console.log("update new code")
        console.log("hello")
        
    }
}