import { test, expect } from "@playwright/test";

test("Logging into Application", async ({ page }) => {
  await page.goto("https://authorized-partner.netlify.app/login");

  await page.locator("#email").fill("Ashokkhatiwada1990@gmail.com");

  await page.locator("#password").fill("Kriti123@");

  await page.locator("#remember").check();

  expect(page.locator("#remember")).toBeChecked();

  await page.locator("//button[normalize-space()='Log In']").click();

  await page.waitForTimeout(5000);

  await page
    .locator("//div[contains(@type,'button')][normalize-space()='Logout']")
    .click();

  await page.locator("//button[normalize-space()='Logout']").click();

  await page.waitForTimeout(5000);
});
