import { test, expect, Page, Locator } from '@playwright/test'
export class HomePage {
    //page
    readonly page: Page;
    //Top navigation
    readonly homeLink: Locator;
    readonly productsLink: Locator;
    readonly cartLink: Locator;
    readonly loginLink: Locator;
    readonly testCasesLink: Locator;
    readonly apiTestingLink: Locator;
    readonly contactUsLink: Locator;
    //banner
    readonly bannerImage: Locator;
    readonly nextArrow: Locator;
    readonly prevArrow: Locator;
    //category
    readonly womenCategory: Locator;
    readonly menCategory: Locator;
    readonly kidsCategory: Locator;
    constructor (page:Page){
        //page
        this.page=page;
        //Top Navigation links
        this.homeLink =page.locator('ul.nav li a', { hasText: 'Home' });
        this.productsLink=page.locator('ul.nav li a').filter({hasText:' Products'});
        this.cartLink=page.getByRole('link',{name:'Cart'});
        this.loginLink=page.locator('a[href="/login"]');
        this.testCasesLink=page.locator('//li/a[@href="/test_cases"]');
        this.apiTestingLink=page.getByRole('link',{name:" API Testing"});
        this.contactUsLink=page.getByRole('link',{name:' Contact us'});
        this.bannerImage=page.locator("div.item.active").filter({has: page.locator("img")});
        this.nextArrow=page.locator('(//a[@data-slide="next"])[1]')
        this.prevArrow=page.locator('(//a[@data-slide="prev"])[1]');
        //catogory
        this.womenCategory = page.locator('h4.panel-title').filter({hasText:"Women"});
        this.menCategory=page.locator('h4.panel-title').filter({hasText:"Men"});
        this.kidsCategory=page.locator('h4.panel-title').filter({hasText:"Kids"})
    }
    async validateHomePageLoaded(){
        await expect(this.bannerImage).toBeVisible();
    }
    async gotoProduct(){
        await this.productsLink.click();
    }
    async gotoCart(){
        await this.cartLink.click();
    }
    async gotoLoginPage(){
        await this.loginLink.click();
    }
    async gotoTestCases(){
        await this.testCasesLink.click();
    }
    async gotoapiTestCases(){
        await this.apiTestingLink.click();
    }
    async gotoContactUs(){
        await this.contactUsLink.click();
    }
    async gotoNextArrow(){
        await this.nextArrow.click();
    }
    async gotoPreArrow(){
        await this.prevArrow.click();
    }
    //category
    async gotoWomen(){
        await this.womenCategory.click();
    }
    async gotoMen(){
        await this.menCategory.click();
    }
    async gotoKids(){
        await this.kidsCategory.click();
    }

}