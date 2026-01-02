// find the price locator from the headers:#productTable thead th:nth-child(3);
// find the locator for price column in the body:#productTable tbody td:nth-child(3);
//find the pagination button links locator: #pagination li a from this get number of pages using count function
//use for loop to iterate each page and extract data from the price column cells and store/push it in the array(declare the empty allprices array before looping);
//parse prices to numbers use the sort() method to sort prices in desc order  get first item in the order;
import{test, expect} from '@playwright/test'
test("find the highest price in the price colum from all the pages",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const allPrices = page.locator("#productTable tbody td:nth-child(3)");
    const allpages = page.locator("#pagination li a");
    const pageCount =await allpages.count();
    const allPriceArray: number[] = [];
    for(let i=0; i<pageCount; i++){
        await allpages.nth(i).click();
        const allPrices =await page.locator("#productTable tbody td:nth-child(3)").allInnerTexts();

        const numericPrices = allPrices.map(price =>
            Number(price.replace('$', '').trim())
          );

          allPriceArray.push(...numericPrices);
    }
    const highestPrice = allPriceArray.sort((a, b) => b - a)[0];
    console.log(`The highest price is: ${highestPrice}`);
})