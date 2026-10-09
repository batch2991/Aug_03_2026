import { test, expect } from "../pages/customfixture"
import { takescreenshot } from "../utils/reusables"


test.beforeEach(async ({ productpage }) => {     
    let status = await productpage.verifyheading()
    await expect(status).toBeTruthy()
})
test("validate the number of products in productspage",{tag:['@smoke','@regression']}, async({productpage})=>{ 
    let count=await productpage.getProductsCount()
    expect(count).toBe(6)
})
test("To validate Prices are in sorting order",{tag:['@smoke','@regression']},async({page,productpage},testInfo)=>{    
     await productpage.sortProducts("lohi")
     await takescreenshot(page,testInfo,"After Sorting the Products")
     let actprices=await productpage.getprices() //actprices we got from webpage
     let expprices=[...actprices].sort((a,b)=>a-b)  ///expprices are in sorting order
     expect(actprices).toEqual(expprices)
})
test("To validate the products added in the cart",{tag:['@regression']},async({page,productpage,cartpage},testInfo)=>{    
     let names1=await productpage.addProductsTocart()
     await productpage.gotoCart()
     await takescreenshot(page,testInfo,"After Navigate to CartPage")
     let names2=await cartpage.getprodnames()
     console.log(names1)
     console.log(names2)
     expect(names1.sort()).toEqual(names2.sort())     
})
test("To validate remove product from the cart",{tag:['@regression']},async({page,productpage,cartpage},testInfo)=>{      
     let names1=await productpage.addProductsTocart()
     await productpage.gotoCart()
     await cartpage.removeproduct()
     await takescreenshot(page,testInfo,"After remove product in Cart")
     let names2=await cartpage.getprodnames()
     expect(names2.length).toBe(names1.length-1)

})
