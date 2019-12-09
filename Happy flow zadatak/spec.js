var homePage=require('./homePage.js');
var loginPage=require('./loginPage');
describe('Happy flow',function(){

    beforeAll(function(){
        browser.get('https://demo.nopcommerce.com/');
        browser.driver.manage().window().maximize();
    });

    

    it('88: Loging in',function(){
        browser.sleep(6000);
        homePage.loginButton.click();
        browser.sleep(500);
        loginPage.login('srki.bball@gmail.com','123456');
        expect(homePage.myAccBtn.isPresent()).toBe(true);
    });

    it('89: Adding to cart Apple MacBook Pro',function(){
        homePage.macBook.click();
        homePage.addMacBook.click();
        browser.sleep(500);
        expect(homePage.barNotification.isPresent()).toBe(true);
        browser.sleep(500);
        homePage.cartNotificationLink.click();
        browser.sleep(500);
        expect(homePage.list.first().getText()).toBe('Apple MacBook Pro 13-inch');

    });

    it('90: Adding to cart Desktop PC Digital Storm',function(){
        homePage.home.click();
        
        homePage.search.sendKeys('Digital Storm');
        homePage.searchBtn.click();
        
        homePage.addDigitalStorm.click();
        expect(homePage.barNotification.isPresent()).toBe(true);
        
    });

    

    it('91: Adding to cart HTC One Mini',function(){
        browser.sleep(5000);
        homePage.home.click();
        homePage.electronics.click();
        homePage.cellPhones.click();
        
        homePage.htc.click();
        homePage.addHtc.click();
        browser.sleep(500);
        expect(homePage.barNotification.isPresent()).toBe(true);
    });

    it('92: Checkout',function(){
        homePage.cartBtn.click();
        browser.sleep(500);
        homePage.termsOfService.click();
        homePage.checkoutBtn.click();
        expect(homePage.addressConfirm.isPresent()).toBe(true);
    });


});