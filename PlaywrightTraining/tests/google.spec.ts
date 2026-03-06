import {test,expect} from '@playwright/test'

test('Google Search', async ({page}) => {
    await page.goto('https://www.google.com/')
    await page.locator('input[name="q"]').fill('Playwright')
    await page.locator('input[name="q"]').press('Enter')
    await expect(page).toHaveTitle(/Playwright/)
})  


