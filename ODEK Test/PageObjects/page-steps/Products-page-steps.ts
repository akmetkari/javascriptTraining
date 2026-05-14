import {Page} from '@playwright/test';
import productsPage from '../page-elements/Products-page-elements.json';
import { WebCommons } from '../../webCommons/webCommons';
import config from '../../config/config.json';


export class ProductsPageSteps{

  page: Page;
    webCommons: WebCommons;

    constructor(page: Page)
    {
        this.page = page;
        this.webCommons = new WebCommons(page);
    }

    async navigateToProductsPage(){
        const url = config.TestEnv.url + '/products';
        await this.webCommons.launchApplication(url);
    }

    async clickOnMenCategory(){
        
        await this.webCommons.clickbyScrollingElement(productsPage.MenLink);
    }

    async clickOnJeansSubcategory(){
        await this.webCommons.clickbyScrollingElement(productsPage.JeansLink);
    }

    async addFirstProductToCart(){
        await this.webCommons.clickbyScrollingElement(productsPage.AddToCartByProductName);
    }

    async addSecondProductToCart(){
        await this.webCommons.clickbyScrollingElement(productsPage.AddToCartButtonSecond);
    }

    async clickContinueShopping(){
        await this.webCommons.clickbyScrollingElement(productsPage.ContinueShoppingButton);
    }

    async viewCart(){
        await this.webCommons.clickbyScrollingElement(productsPage.ViewCartLink);
    }

    async proceedToCheckout(){
        await this.webCommons.clickbyScrollingElement(productsPage.ProceedToCheckoutButton);
    }

    async clickRegisterLogin(){
        await this.webCommons.clickbyScrollingElement(productsPage.RegisterLoginLink);
    }

    async searchProduct(searchTerm: string) {
        await this.webCommons.typeInElement(productsPage.SearchInput, searchTerm);
        await this.webCommons.clickElement(productsPage.SearchButton);
    }

    async verifyAllProductsContain(searchTerm: string) {
        const productNames = await this.webCommons.element(productsPage.ProductNames).allTextContents();
        
        const hasMatch = productNames.some(name => 
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (!hasMatch && productNames.length > 0) {
            throw new Error(`None of the returned products contain the search term "${searchTerm}"`);
        }
    }

    async filterByWomenTops() {
        await this.webCommons.clickElement(productsPage.CategoryWomen);
        await this.webCommons.clickElement(productsPage.SubcategoryTops);
    }

    async verifyCategoryHeader(expectedHeader: string) {
        await this.webCommons.checkTextValue(productsPage.CategoryTitleHeader, expectedHeader);
    }

    async viewFirstProductDetails() {
        await this.webCommons.clickElement(productsPage.ViewProductFirst);
    }

    async verifyProductDetails(expectedName: string, expectedPrice: string) {
        await this.webCommons.checkTextValue(productsPage.DetailProductName, expectedName);
        await this.webCommons.validateElementIsVisible(productsPage.DetailPrice);
        const actualPrice = await this.webCommons.element(productsPage.DetailPrice).textContent();
        if (!actualPrice?.includes(expectedPrice)) {
            throw new Error(`Expected price to contain ${expectedPrice}, but got ${actualPrice}`);
        }
    }
}


