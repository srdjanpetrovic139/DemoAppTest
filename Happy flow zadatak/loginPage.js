var loginPage=function(){
    this.email=element(by.id('Email'));
    this.password=element(by.id('Password'));
    this.rememberMe=element(by.id('RememberMe'));
    this.loginBtn=element(by.className('button-1 login-button'));

    this.EC=protractor.ExpectedConditions;

    this.login=function(a,b){
        this.email.sendKeys(a);
        this.password.sendKeys(b);
        this.loginBtn.click();
    };
}
module.exports=new loginPage();