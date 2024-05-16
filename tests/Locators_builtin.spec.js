const { test, expect } = require("@playwright/test")

test('Built-inLocators', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //page.getByAltText() - to locate an element, usally Image, by its text alternative.

    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() - to locate an input by placeholder.

    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button', { type: 'submit' }).click()
    await expect(await page.getByText('manda V')).toBeVisible()

})

