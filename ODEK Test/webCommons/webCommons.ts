import {Page, expect, Locator} from '@playwright/test';

export class WebCommons {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //launch the application
    async launchApplication(url: string) {
        await this.page.goto(url);
    }


    //get element 
    element(selectors:string ): Locator{
        return this.page.locator(selectors);
    }

    async validateElementIsVisible(selectors:string){
        await expect(this.element(selectors)).toBeVisible();
    }

    //click on element 
    async clickElement(selectors: string) {
        
        await this.element(selectors).click();
    }

    //click on element 
    async clickbyScrollingElement(selectors: string) {
        await this.element(selectors).scrollIntoViewIfNeeded();
        await this.element(selectors).click();
    }


    //type in element
    async typeInElement(selectors: string, text: string) {
        await this.element(selectors).fill(text);
    }

    //scroll to element 
    async scrollToElement(selectors:string){
        this.element(selectors).scrollIntoViewIfNeeded();
    }

    async checkBox(selectors:string){
        await this.element(selectors).check();
    }

    async checkRadioButton(selectors:string){
        await this.element(selectors).check();
    }

    //check text value correct 
    async checkTextValue(selectors:string, expectedText:string){
        const actualText = await this.element(selectors).textContent();
        expect(actualText).toBe(expectedText);
    }

    async selectFromDropDown(selectors:string, value:string)
    {
        await this.element(selectors).selectOption(String(value));
    }

    async navigatePreviousPage()
    {
        await this.page.goBack();
    }

}