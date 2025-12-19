import { Page } from "@playwright/test";

export class Helper {

    readonly page:Page;

    constructor(page:Page){
        this.page =page;
    }

    static async waitforSelector(page: Page, selector: string) {
        await page.waitForSelector(selector);
    }

}