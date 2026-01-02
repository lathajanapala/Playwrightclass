import { test, expect } from '@playwright/test'
test("Verify the google search", async ({ page }) => {
    await page.goto("https://chatgpt.com/");
    await expect(page.getByText("ChatGPT",{exact:true})).toBeVisible();
    // await expect(
    //     page.getByText('ChatGPT 5.2 Instant', { exact: true })
    //   ).toBeVisible();

     await page.screenshot({ path: 'screenshot1.png' });
})
