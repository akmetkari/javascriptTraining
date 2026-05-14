import {Page} from '@playwright/test';
import homePage from '../page-elements/home-page-elements.json';
import { WebCommons } from '../../webCommons/webCommons';
import config from '../../config/config.json';

export class homePageSteps {

    page: Page;
    webCommons: WebCommons;

    constructor(page: Page) {    
    this.page = page;
    this.webCommons = new WebCommons(page);
    }

    async checkLoginIsSuccessful(){
        const url = config.TestEnv.url;
        await this.webCommons.launchApplication(url);
        await this.webCommons.validateElementIsVisible(homePage.HomeLogo);
    }

    async clickOnSignUpLoginButton(){
        await this.webCommons.clickElement(homePage.SignUpButton);
        await this.webCommons.validateElementIsVisible(homePage.NameTextbox);
    }

    async fillSignUpForm(name:string, email:string){
        await this.webCommons.typeInElement(homePage.NameTextbox, name);
        await this.webCommons.typeInElement(homePage.emailAddressField, email);
        await this.webCommons.clickElement(homePage.SignUpSubmitButton);
    }

    async verifyAccountCreationPageOpen(){
        await this.webCommons.validateElementIsVisible(homePage.NameTextbox);
    }

    async loginWithCredentials(email: string, password: string){
        await this.webCommons.typeInElement(homePage.LoginEmailField, email);
        await this.webCommons.typeInElement(homePage.LoginPasswordField, password);
        await this.webCommons.clickElement(homePage.LoginButton);
    }

    async navigateToPreviousPage()
    {
        await this.webCommons.navigatePreviousPage();
    }


    async navigateToProductsPage(){
        const url = config.TestEnv.url + '/products';
        await this.webCommons.launchApplication(url);
    }

    async verifyEmailAlreadyExistsError(){
        await this.webCommons.validateElementIsVisible(homePage.EmailAlreadyExistError);
    }

}