// this one gives all rows;locator: #productTable tbody tr
//if i want find all the names from the table:#productTable tbody tr td:nth-child(2)
//find locator for pagination:locator: #pagination li a find the count and use for loop to iterate to all pages need to apply click method;
import { test, expect } from '@playwright/test'
test("Find all the texts in the second column and assert Fitness Tracker is there or not", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const allpages = page.locator("#pagination li a");
    const fourthpage = page.locator("#pagination li a").nth(3)
    const pagesCount = await allpages.count();
    const allNames: string[] = [];
    for (let i = 0; i < pagesCount; i++) {
        await allpages.nth(i).click();
        await page.waitForLoadState('networkidle');
        const rows = page.locator("#productTable tbody tr");
        const secondColumnData = rows.locator("td:nth-child(2)");
        const names = await secondColumnData.allInnerTexts();
        allNames.push(...names)
    }
    expect(allNames).toContain("Fitness Tracker")
    console.log(allNames)
    await expect(fourthpage).toBeEnabled()
})

