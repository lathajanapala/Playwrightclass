import{test,expect}from'@playwright/test'
test("click on the AI dropdown and click on the smartBearAI",async({page})=>{
    await page.goto("https://smartbear.com/",{ waitUntil: 'load' });
    // await expect(page.getByRole('heading', { name: 'Build Better Software Faster' }) ).toBeVisible();
    const allTopBarLinks = page.locator('.nav li a[data-toggle="dropdown"]');
    const allLinksTexts = (await allTopBarLinks.allInnerTexts()).map(text=>text.replace(/\s+/," ").trim());
    console.log("🚀 ~ allLinksTexts:", allLinksTexts);
    await page.getByRole('button',{name:'AI'}).click();
    await page.getByText('SmartBear AI',{exact: true}).click();
    const aiLinks = page.locator('ul.ai-menu');
    const aiLinkTexts = (await aiLinks.allInnerTexts()).map(text=>text.replace(/\s+/g," ").trim())
    console.log("🚀 ~ aiLinkTexts:", aiLinkTexts);
    const futureOfAI = page.locator("ul .ai-resources .ai-featured-item").filter({ hasText: "Agents, Autonomy, and the Future of AI in Development Workflows" });
   await expect(futureOfAI).toContainText("Agents, Autonomy, and the Future of AI in Development Workflows")
    // page.getByText('SmartBear MCP Server', { exact: true })

})