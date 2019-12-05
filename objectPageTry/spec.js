var loginPage=require('./loginPage.js');
describe('Login page',function(){
    
    beforeEach(function(){
        loginPage.get();
        browser.sleep(6000);
    });

    it('Entering valid E-mail and Password',function(){

        loginPage.setMailPass('srki.bball@gmail.com','123456');
        expect(loginPage.myAccBtn.isPresent()).toBe(true);

    });

    it('Unregisterd Email and Password',function(){
        loginPage.setMailPass('marko@markovic.rs','123456');
        expect(loginPage.verificationUp.getText()).toContain('unsuccessful');

    });

    it('Enternig non valid Email',function(){
        loginPage.setMailPass('marko','123');
        expect(loginPage.wrongAndNoMail.getText()).toEqual('Wrong email');
    });

    it('Empty Email',function(){
        loginPage.setMailPass('','123');
        expect(loginPage.wrongAndNoMail.getText()).toEqual('Please enter your email');
    })

    it('Empty Email and empty Password',function(){
        loginPage.setMailPass('','');
        expect(loginPage.wrongAndNoMail.getText()).toEqual('Please enter your email');
    });
});