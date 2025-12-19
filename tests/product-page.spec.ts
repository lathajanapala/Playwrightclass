import{test}from'@playwright/test'
import { HomePage } from '../pages/home-page'
import { ProductPage } from '../pages/product-page'
import { LoginPage } from '../pages/login-page';
import { qa } from '../data/qa';
test("Print all products and prices",async({page})=>{
   const home = new HomePage(page);
   const products = new ProductPage(page);
   const login=new LoginPage(page);
   await login.goto(qa.URL);
   await home.gotoProduct();
   await products.verifyPageLoaded();
   await products.printAllProductNames();
   await products.prinAllProductsPrice();
   await products.printAllproductsNameswithPrice();

});