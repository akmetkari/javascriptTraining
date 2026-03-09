import {test, expect, chromium } from '@playwright/test';

test('verify google is lauched',async() => {
    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.google.com");

    const title = await page.title();
    expect(title).toBe('Google');

    await browser.close();
});