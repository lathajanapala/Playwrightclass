import test from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { qa } from "../data/qa";

test("Validate Login Page",async({page})=>{
    const loginPage =new LoginPage(page);
    await loginPage.goto(qa.URL);
    await loginPage.performLogin(qa.EmailID,qa.Password);
    await loginPage.validateLogin();

})