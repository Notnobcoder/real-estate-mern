import { test, expect } from '@playwright/test';
const ui_url = "http://localhost:5173"

test("should Allow the user to login",async ({page}) => {
  const testEmail = `testRegister${Math.floor(Math.random() * 9000) + 1000}@test.com`
  await page.goto(ui_url)
  await expect(page.getByRole("heading", {name:"Latest Destinations"})).toBeVisible();
  await page.getByRole("link", {name:"Sign In"}).click();
  await expect(page.getByRole("heading",{name:"Sign In"})).toBeVisible();
  // await page.locator("[name=email]").fill("tushar@lovoj.com");
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("password123");
  await page.getByRole("button", {name:"Login"}).click();
  await expect(page.getByText("Not R")).toBeVisible();
})

test("should allow users to register", async ({page}) => {
  await page.goto(ui_url);
  await expect (page.getByRole("heading", {name:"Latest Destinations"})).toBeVisible();
  await page.getByRole("link",{name:"Sign In"}).click();
  await expect(page.getByRole("heading",{name:"Sign In"})).toBeVisible();
  await page.getByRole("link",{name:"Create an account here"}).click();
  await expect(page.getByRole("heading",{name:"Create an Account"})).toBeVisible();
  await page.locator("[name=firstName]").fill("first name 1");
  await page.locator("[name=lastName]").fill("Last name 1");
  await page.locator("[name=email]").fill("testing2@lovoj.com");
  await page.locator("[name=password]").fill("password12345");
  await page.locator("[name=confirmPassword]").fill("password12345");
  await page.getByRole("button",{name:"Create account"}).click();
  await expect( page.getByText("User registered OK")).toBeVisible();
})

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
