import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage
{

    private readonly prodheading:string="Products"
    private readonly menu1:string="Open Menu"
    private readonly logoutlink:string="Logout"

    private readonly allprods:string="div.inventory_item_name "
    private readonly prices:string="div.inventory_item_price"     
    private readonly cartlink:string='a.shopping_c_lnk'

    public async verifyheading()
    {
        await this.page.waitForSelector("//span[.='Products']",{timeout:10000})
        return await this.page.getByText(this.prodheading).isVisible()
    }
    public async logout()
    {
         await this.page.getByText(this.menu1).click()
         await this.page.getByText(this.logoutlink).click()
    }
    public async getProductsCount()
    {
       return await this.page.locator(this.allprods).count()
    }
    async sortProducts(sortorder:string)
     {
      await this.page.locator("select.product_sort_container").selectOption({value:sortorder})
      await this.page.waitForTimeout(2000)
     }
     async getprices()
     {       
       let arrprice:number[]=[]
       let allprices=await this.page.locator(this.prices).all()
       for(let i=0;i<allprices.length;i++)
       {
            arrprice.push(Number(String(await allprices[i].textContent()).slice(1)))
       }
       return arrprice
     }
     async addProductsTocart()
     {
         let pnames:string[]=[]
         for(let i=1;i<=2;i++)
         {   
             let n=Math.floor(Math.random()*6+1)
             await this.page.waitForTimeout(2000)
             let pname=await this.page.locator("(//button[.='Add to cart'])["+n+"]/ancestor::div[1]/preceding-sibling::div/a/div").textContent()
             pnames.push(pname||'')
             await this.page.locator("(//button[.='Add to cart'])["+n+"]").click()
             
         }        
         return pnames;
     }
     async gotoCart()
     {
      await this.page.locator(this.cartlink).click()      
     }

}