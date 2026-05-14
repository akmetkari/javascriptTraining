import { test, TestInfo } from '@playwright/test';
import { homePageSteps } from '../PageObjects/page-steps/home-page-steps'
import { signupPageSteps } from '../PageObjects/page-steps/signup-page-steps';
import { ProductsPageSteps } from '../PageObjects/page-steps/Products-page-steps';
import data from '../TestData/ui/data.json';
let testData: any;

test.describe('Application Tests', () => {

    let homePage: homePageSteps;
    let signUpPage: signupPageSteps;
    let productsPage: ProductsPageSteps;

    test.beforeEach(async ({ page }) => {
        homePage = new homePageSteps(page);
        signUpPage = new signupPageSteps(page);
        productsPage = new ProductsPageSteps(page);

    });

    test('Test Case 1: Sign Up', async ({ page }, testInfo: TestInfo) => {
        testData = data[testInfo.title as keyof typeof data];

        await homePage.checkLoginIsSuccessful();

        await homePage.clickOnSignUpLoginButton();

        const uniqueEmail = `user${Date.now()}@test.com`;
        await homePage.fillSignUpForm(testData["Name"], uniqueEmail);

        await signUpPage.fillPersonalDetails(testData["title"], testData["firstName"], testData["lastName"], testData["company"]);

        await signUpPage.fillAddressDetails(testData["address1"], testData["address2"], testData["city"], testData["state"], testData["zipcode"]);

        await signUpPage.fillContactDetails(testData["mobileNumber"]);

        await signUpPage.selectDateOfBirth(testData["Day"], testData["Month"], testData["Year"]);

        await signUpPage.fillPasswordAndPreferences(testData["password"], testData["enableOffers"]);
        await signUpPage.createAccount();

    });


    test('Test Case 2: Purchase Product', async ({ page }, testInfo: TestInfo) => {

        testData = data[testInfo.title as keyof typeof data];

        await homePage.checkLoginIsSuccessful();

        await homePage.clickOnSignUpLoginButton();

        await homePage.loginWithCredentials(testData["email"], testData["password"]);

        await homePage.navigateToProductsPage();

        await productsPage.clickOnMenCategory();

        await productsPage.clickOnJeansSubcategory();

        await productsPage.addFirstProductToCart();

        await productsPage.viewCart();

        await productsPage.proceedToCheckout();

    });


    test('Test Case 3: Inventory & Search Reliability', async ({ page }, testInfo: TestInfo) => {
        testData = data[testInfo.title as keyof typeof data];

        await homePage.checkLoginIsSuccessful();

        await homePage.navigateToProductsPage();

        await productsPage.searchProduct(testData["searchTerm"]);

        await productsPage.verifyAllProductsContain(testData["searchTerm"]);

        await productsPage.filterByWomenTops();

        await productsPage.verifyCategoryHeader(testData["categoryHeader"]);

        await productsPage.viewFirstProductDetails();

        await productsPage.verifyProductDetails(testData["firstProductName"], testData["firstProductPrice"]);

    });

    test('Test Case 4: Sign Up with existing email', async ({ page }, testInfo: TestInfo) => {
        // Use data from Test Case 1 which is already registered
        testData = data["Test Case 1: Sign Up"];

        await homePage.checkLoginIsSuccessful();
        await homePage.clickOnSignUpLoginButton();
        await homePage.fillSignUpForm(testData["Name"], testData["email"]);
        await homePage.verifyEmailAlreadyExistsError();
    });

});