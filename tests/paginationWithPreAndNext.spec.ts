import{test,expect} from'@playwright/test'
test("validatte the pagination table which has pre and next buttons",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    // const pagesPre = page.locator(".pagination li.page-item button[id='prev2']");
    const pagesNext = page.locator(".pagination li.page-item button[id='next2']");
    const allCards= page.locator("#tbodyid");
    let found = false;
    while(true){
          const titles = await allCards.allInnerTexts();
          if(titles.some(titles=>titles.includes("ASUS Full HD"))){
            found =true;
            break;
          }
          if(!(await pagesNext.isVisible() || await pagesNext.isDisabled())){
            break;
          }
          await pagesNext.click();
         await page.waitForTimeout(5000)

    }
    expect(found).toBeTruthy();

})