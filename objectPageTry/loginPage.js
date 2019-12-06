var loginPage=function(){
    this.email=element(by.id('Email'));
    this.password=element(by.id('Password'));
    this.loginBtn=element(by.className('button-1 login-button'));
    this.verificationUp=element(by.className('message-error validation-summary-errors'));
    this.wrongAndNoMail=element(by.id('Email-error'));
    this.myAccBtn=element(by.className('ico-account'));//from home page
    this.EC=protractor.ExpectedConditions;
    this.rememberMe=element(by.id('RememberMe'));

    this.get=function(){
        browser.get('https://demo.nopcommerce.com/login');
    };

    this.setMailPass=function(a,b){
        this.email.sendKeys(a);
        this.password.sendKeys(b);
        this.loginBtn.click();
    };
};
module.exports=new loginPage();