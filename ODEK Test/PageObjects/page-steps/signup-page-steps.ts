import {Page} from '@playwright/test';
import homePage from '../page-elements/home-page-elements.json';
import signUpPage from '../page-elements/signup-page-elements.json';
import { WebCommons } from '../../webCommons/webCommons';
import config from '../../config/config.json';

export class signupPageSteps{

    page: Page;
    webCommons: WebCommons;

    constructor(page: Page)
    {
        this.page = page;
        this.webCommons = new WebCommons(page);
    }

    async fillPersonalDetails(title:string, firstName:string, lastName:string, company:string){
        await this.webCommons.clickElement(signUpPage.MrRadioButton);
        await this.webCommons.typeInElement(signUpPage.FirstNameTextbox, firstName);
        await this.webCommons.typeInElement(signUpPage.LastNameTextbox, lastName);
        await this.webCommons.typeInElement(signUpPage.CompanyTextbox, company);
    }

    async fillAddressDetails(address1:string, address2:string, city:string, state:string, zipcode:string){
        await this.webCommons.typeInElement(signUpPage.AddressTextbox, address1);
        await this.webCommons.typeInElement(signUpPage.Address2Textbox, address2);
        await this.webCommons.typeInElement(signUpPage.CityTextbox, city);
        await this.webCommons.typeInElement(signUpPage.StateTextbox, state);
        await this.webCommons.typeInElement(signUpPage.ZipcodeTextbox, zipcode);
    }

    async fillContactDetails(mobileNumber:string){
        await this.webCommons.typeInElement(signUpPage.MobileNumberTextbox, mobileNumber);
    }

    async selectDateOfBirth(day:string, month:string, year:string){
        await this.webCommons.selectFromDropDown(signUpPage.DaysDropdown, day);
        await this.webCommons.selectFromDropDown(signUpPage.MonthsDropdown, month);
        await this.webCommons.selectFromDropDown(signUpPage.YearsDropdown, year);
    }

    async fillPasswordAndPreferences(password:string, enableOffers:boolean){
        await this.webCommons.typeInElement(signUpPage.PasswordTextbox, password);
        if(enableOffers){
            await this.webCommons.checkBox(signUpPage.SpecialOffersCheckbox);
        }
    }

    async createAccount(){
        await this.webCommons.clickElement(signUpPage.CreateAccountButton);
        await this.webCommons.validateElementIsVisible(signUpPage.AccountCreatedText);
    }

    async verifyAccountCreationPageOpen(){
        await this.webCommons.validateElementIsVisible(homePage.NameTextbox);
    }

}