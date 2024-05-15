import { test, expect } from '@playwright/test';
import { SignupPage } from '../pageObject/signupPage';


const userbtn = "//ul[@class='list']/li[10]/a[1]"
const manageuserbtn = "//a[normalize-space()='Manage User']"




test.describe("tests for shreesrb website page valide", async () => {


    test('test1 sign up page valide"', async ({ page }) => {
        let signupPage = new SignupPage()
        await signupPage.signupPageValidation(page);

    });

    // test('test2 Activate sign up user valide"', async ({ page }) => {
    //     let signupPage = new SignupPage();
    //     await signupPage.ActiveSignUpUser(page);


    // });
    // // test('test2 Activate sign up user valide"', async ({ page }) => {
    //     let signupPage = new SignupPage();
    //     await signupPage.LoginUserValidation();


    // });
});