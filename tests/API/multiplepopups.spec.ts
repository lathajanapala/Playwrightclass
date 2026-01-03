import { test, expect } from '@playwright/test';

test('Perform the actions on the page; two pop-ups open when clicking.', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const popups: any[] = [];

  // Capture popups
  page.on('popup', popup => popups.push(popup));

  await page.click('#PopUp');

  // Wait until both popups are opened
  await expect.poll(() => popups.length).toBe(2);

  // Wait for each popup to stabilize (URL + title)
  for (const popup of popups) {
    await popup.waitForLoadState('domcontentloaded');
    await popup.waitForFunction(() => document.title.length > 0);
  }

  // Capture URL + title safely
  const popupDetails = await Promise.all(
    popups.map(async p => ({
      url: p.url(),
      title: await p.title(),
    }))
  );

  // 🔍 Debug output (important)
  console.log(popupDetails);

  // Assertions (non-flaky)
  expect(popupDetails.length).toBe(2);
  expect(popupDetails.some(p => p.title.toLowerCase().includes('selenium'))).toBeTruthy();
  expect(popupDetails.some(p => p.title.toLowerCase().includes('playwright'))).toBeTruthy();
});
