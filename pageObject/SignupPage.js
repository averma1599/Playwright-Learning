import { assert } from "console";
const { default: test, expect } = require("@playwright/test")
import { common } from '../commonHelper/commonfunctionHelper.js';
const loginuser = "li[class='log-in'] a";


// let commonfunctionHelper = new common()
export class SignupPage {
    SignUpFormDetail = {
        signupbtn: "//ul[@class='list']/li[10]/a[1]",
        userbtn: " li:nth-child(10) > a:nth-child(1)",
        managebtn: "//a[normalize-space()='Manage User']"
    }

    signupPageValidation = async (page) => {
        let generateRandomString = (Math.random() + 1).toString(36).substring(7);
        let gengmail = generateRandomString + '@gmail.com'
        await page.goto('https://shreesrb.com/');
        await page.waitForTimeout(5000);
        await page.getByRole('tab', { name: 'New User' }).click();
        await page.getByPlaceholder('Name', { exact: true }).fill(generateRandomString);
        await page.getByPlaceholder('Shop Name').fill(generateRandomString);
        await page.getByPlaceholder('Address').fill(generateRandomString);
        await page.getByPlaceholder('GSTIN ').fill('1234567890');
        await page.getByPlaceholder('Phone Number ').fill('1234567890');

        await page.getByRole('textbox', { name: 'Email' }).fill(gengmail);
        await page.getByRole('textbox', { name: 'Password *' }).fill('Admin123');
        await page.waitForTimeout(5000);
        await page.getByRole('button', { name: 'Submit' }).click();


    }

    // LoginUserValidation = async () => {
    //     await page.goto('https://shreesrb.com/');
    //     await page.getByRole('tab', { name: 'Login' }).click();
    //     await page.getByPlaceholder('Email').fill();
    //     await page.getByPlaceholder('Password *').fill();
    //     await page.getByRole('button', { name: 'Login' }).click();
    //     // let username = page.getddddd-=''''''
    // }

}