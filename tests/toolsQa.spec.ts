import{test,expect} from '@playwright/test'
test("click on the seleniumtraining link",async({page})=>{
    await page.goto("https://toolsqa.com/selenium-webdriver/selenium-tutorial/")
    const seleniumLink = page.getByRole('link',{name:'Selenium Training',exact: true });
    await seleniumLink.first().click();
    await expect(page).toHaveURL("https://toolsqa.com/selenium-training?q=headers")
    await expect(page.locator(".enroll__heading")).toContainText('Selenium Certification Training')

})