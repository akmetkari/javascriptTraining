//launch the browser
import {test,expect,chromium} from '@playwright/test';

test('launching browser ',async () => {

    //launch the browser engine (Chrome engine)
    const browserEngine = await chromium.launch({channel: 'chrome',headless:false});

    //launch edge browser 
    const browserContext = await browserEngine.newContext();

    //launch new tab
    const page  = await browserContext.newPage();

    //speciy resolution 
    await page.setViewportSize({width:1920,height:1080});

    //clear all cookies 
    await browserContext.clearCookies();

    //page got 
    await page.goto('https://www.google.com/');

});