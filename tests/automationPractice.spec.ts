import { test, expect } from '@playwright/test'
test("Validate pagination table ", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const pages = page.locator("#pagination li a");
    const pageCount =await pages.count();
    let found = false;
    for(let i=0;i<=pageCount; i++){
        await pages.nth(i).click();
        const row =page.locator('#productTable tbody tr').filter({has:page.locator('td:nth-child(2)'),hasText:'Wireless Mouse 20'});
        if(await row.count()>0){
            await expect(row).toBeVisible()
            found = true;
            break;
        }


    }
    page.screenshot({path:'screenShots/table1.png'})
    expect(found).toBeTruthy()

})