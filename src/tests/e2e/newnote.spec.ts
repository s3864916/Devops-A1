import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=New Note
  await page.locator('text=New Note').click();
  await expect(page).toHaveURL('http://localhost:3000/new');

  // Click [placeholder="Enter Note Title"]
  await page.locator('[placeholder="Enter Note Title"]').click();

  // Fill [placeholder="Enter Note Title"]
  await page.locator('[placeholder="Enter Note Title"]').fill('E2E Test');

  // Press Tab
  await page.locator('[placeholder="Enter Note Title"]').press('Tab');

  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill('E2E Description');

  // Click text=Save
  await page.locator('text=Save').click();
  await expect(page).toHaveURL('http://localhost:3000/');

  // Click text=Delete
  await page.locator('text=Delete').click();
  await expect(page).toHaveURL('http://localhost:3000/');

});