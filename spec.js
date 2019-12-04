browser.ignoreSynchronization=true;

describe('nopCommerce demo store', function(){
    //Lokatori
    var email=element(by.id('Email'));
    var password=element(by.id('Password'));
    var login=element(by.className('button-1 login-button'));
    var verifiBadMailPass=element(by.className('message-error validation-summary-errors'));
    var EC=protractor.ExpectedConditions;
    var wrongMail=element(by.id('Email-error'));
    var myAcc=element(by.className('ico-account'));

    //Funkcije
    function inputEmailPass(a,b){
        email.sendKeys(a);
        password.sendKeys(b);
        login.click();
    }

    //Testovi
    beforeEach(function(){
        browser.get('https://demo.nopcommerce.com/login?returnUrl=%2F');
    });
    
    //Negative flow
    xit('BadMailBadPass',function(){
        inputEmailPass('marko@gmail.com','123456');
        browser.wait(EC.presenceOf(verifiBadMailPass));
        // each IT consists of expect() ...
    });
    
    xit('EverythingButMail',function(){
        inputEmailPass('marko','123');
        browser.wait(EC.visibilityOf(wrongMail));//da li se kombinuje sa getText
        // each IT consists of expect() ...
    });
    xit('EverythingButMail',function(){
        inputEmailPass('@@@121','@@@123');
        browser.wait(EC.visibilityOf(wrongMail));//da li se kombinuje sa getText
        // each IT consists of expect() ...
    });
    
    xit('NoMail',function(){
        inputEmailPass('','123');
        
        // use not.toBeUndefined() & not.toBeNull()
        // expect(expectedUrl).not.toBeUndefined();
        expect(wrongMail.getText()).toEqual('Please enter your email');
    });

   xit('EmptyMailEmptyPass',function(){
        inputEmailPass('','');
        expect(wrongMail.getText()).toContain('enter');
    });

    //positive flow
    it('Successfull login - validate proper URL',function(){
        inputEmailPass('srki.bball@gmail.com','123456');
        
        let expectedURL = browser.getCurrentUrl();
        
        expect(expectedUrl).toEqual('https://demo.nopcommerce.com/');
        
        
        // browser.wait(2000);
        //browser.wait(EC.urlContains(myAcc));
        // console.log(expectedUrl);
        

        
    });

})