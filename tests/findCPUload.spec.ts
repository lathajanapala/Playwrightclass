// first find the table element #taskTable
//find all rows in the page #taskTable tbody[id="rows"] tr
//iterate through all rows and find where chrome row is and find the datacell in that row with%

import { test, expect } from '@playwright/test';

test('Find the chrome process cpu value in the dynamic table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 1️⃣ Read header cells from the FIRST ROW (this table puts headers there)
  const headerRow = page.locator('#taskTable tr').first();
  const headerTitles = await headerRow.locator('th').allInnerTexts();

  // 2️⃣ Find CPU column index dynamically
  const cpuColIndex = headerTitles.findIndex(h => h.includes('CPU')) + 1;
  expect(cpuColIndex).toBeGreaterThan(0);

  // 3️⃣ Get data rows (rows that contain <td>, i.e., not the header row)
  const dataRows = page.locator('#taskTable tr').filter({ has: page.locator('td') });

  // 4️⃣ Find the Chrome row by the stable first column
  const chromeRow = dataRows.filter({
    has: page.locator('td:first-child', { hasText: 'Chrome' })
  });

  // 5️⃣ Read CPU value using the dynamic column index
  const cpuValue = await chromeRow.locator(`td:nth-child(${cpuColIndex})`).innerText();

  console.log(`CPU Value for Chrome: ${cpuValue}`);
  expect(cpuValue).toMatch(/%$/);
});

