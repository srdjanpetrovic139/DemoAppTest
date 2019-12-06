var loginPage=require('./loginPage.js');
describe('Login page',function(){
    
    beforeEach(function(){
        loginPage.get();
        browser.sleep(6000);
    });

    it('62: Entering valid E-mail and Password',function(){

        loginPage.setMailPass('srki.bball@gmail.com','123456');
        expect(loginPage.myAccBtn.isPresent()).toBe(true);

    });

    it('63: Unregisterd Email and Password',function(){
        loginPage.setMailPass('marko@markovic.rs','123456');
        expect(loginPage.verificationUp.getText()).toContain('unsuccessful');

    });

    it('64: Enternig non valid Email',function(){
        loginPage.setMailPass('marko','123');
        expect(loginPage.wrongAndNoMail.getText()).toEqual('Wrong email');
    });

    it('65: Empty Email',function(){
        loginPage.setMailPass('','123');
        expect(loginPage.wrongAndNoMail.getText()).toEqual('Please enter your email');
    })

    it('66: Empty Email and empty Password',function(){
        loginPage.setMailPass('','');
        expect(loginPage.wrongAndNoMail.getText()).toEqual('Please enter your email');
    });

    // it('Remember Me', function(){
        
    //     loginPage.email.sendKeys('srki.bball@gmail.com');
    //     loginPage.password.sendKeys('123456');
    //     loginPage.rememberMe.click();
    //     loginPage.loginBtn.click();
    //     browser.driver.close();
    //     browser.get('https://demo.nopcommerce.com/')
    //     expect(loginPage.myAccBtn.isPresent()).toBe(false);

    // });

    
    
});