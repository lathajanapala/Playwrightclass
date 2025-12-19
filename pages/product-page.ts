import { test, expect, Page, Locator } from '@playwright/test'
export class ProductPage {
    readonly page: Page;
    readonly title: Locator;
    readonly searchProduct: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly allProducts: Locator;
    readonly allProductNames: Locator;
    readonly allProductPrices: Locator;
    constructor(page:Page){
        this.page=page;
        this.title=page.locator("h2.title").filter({hasText:"All Products"});
        this.searchProduct =page.locator("input#search_product");
        this.searchButton=page.locator("button#submit_search");
        this.allProducts =page.locator("div.productinfo");
        this.allProductNames=page.locator("div.productinfo p");
        this.allProductPrices=page.locator("div.productinfo h2");

    }
    async verifyPageLoaded(){
        await this.title.waitFor({state:"visible"})
    }
    async printAllProductNames(){
       const count = await this.allProductNames.count()
       console.log(`Total product names:${count}`)
       for(let i=0;i<count;i++){
        const name = await this.allProductNames.nth(i).innerText();
        console.log(`Product ${i+1}:${name}`)
       }
    }
    async prinAllProductsPrice(){
        const count = await this.allProductPrices.count();
        console.log(`Total product prices:${count}`)
        for(let i=0;i<count;i++){
            const price= await this.allProductPrices.nth(i).innerText();
            console.log(`Productprice ${i+1}: ${price}`);
        }
    }
    async printAllproductsNameswithPrice(){
        const count = await this.allProducts.count();
        for(let i=0;i<count;i++){
            const product = this.allProducts.nth(i);
            const name = await product.locator("p").innerText();
            const price= await product.locator("h2").innerText();
            console.log(`${name} → ${price}`);
        }

    }

}