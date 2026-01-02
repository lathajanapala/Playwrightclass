
import { expect, test, Locator, Page } from "@playwright/test";
import { Helper } from "../utility/helper";

export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly homelinkafterLogin: Locator
    readonly emailselector:string;

    constructor(page: Page) {
        this.page = page;
        this.email = this.page.locator('//input[@data-qa="login-email"]');
        this.password = this.page.locator('//input[@data-qa="login-password"]');
        this.loginBtn = this.page.locator('//button[@data-qa="login-button"]');
        this.homelinkafterLogin = this.page.locator('(//ul[@class="nav navbar-nav"]/li/a)[1]');
        this.emailselector='//input[@data-qa="login-email"]';
    }

    async goto(url:string) {
        await this.page.goto(url)
        // await this.page.waitForSelector(this.emailselector);
        await Helper.waitforSelector(this.page,this.emailselector)

    }

    async performLogin(email:string,password:string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async validateLogin() {
        await expect(this.homelinkafterLogin).toHaveAttribute('style');
    }

}
