var registerPage=function(){
    this.maleRb=element(by.id('gender-male'));
    this.femaleRb=element(by.id('gender-female'));
    this.firstName=element(by.id('FirstName'));
    this.lastName=element(by.id('LastName'));
    this.dateDay=element(by.name('DateOfBirthDay'));
    this.dateMonth=element(by.name('DateOfBirthMonth'));
    this.dateYear=element(by.name('DateOfBirthYear'));
    this.email=element(by.id('Email'));
    this.company=element(by.id('Company'));
    this.cbNewsletter=element(by.id('Newsletter'));
    this.password=element(by.id('Password'));
    this.confirmPassword=element(by.id('ConfirmPassword'));
    this.btnRegister=element(by.id('register-button'));
    //For validation
    this.regCompleted=element(by.className('result'));
    this.reqFristName=element(by.id('FirstName-error'));
    this.reqLastName=element(by.id('LastName-error'));
    this.reqEmail=element(by.id('Email-error'));
    this.reqPassword=element(by.id('Password-error'));
    this.reqConfPassword=element(by.id('ConfirmPassword-error'));
    this.validationError=element(by.className('field-validation-error'));
    this.validationAleradyExists=element(by.className('message-error validation-summary-errors'));

    this.get=function(){
        browser.get('https://demo.nopcommerce.com/register');
    };

    this.fullRegistration=function(Name,LastName,Email,Company,Password,ConfirmPassword){
        this.maleRb.click();
        this.firstName.sendKeys(Name);
        this.lastName.sendKeys(LastName);
        //this.dateDay.$('[value=""]')
        this.email.sendKeys(Email);
        this.company.sendKeys(Company);
        this.password.sendKeys(Password);
        this.confirmPassword.sendKeys(ConfirmPassword);
        this.btnRegister.click();
    };

    this.requiredRegistration=function(name,lastName,email,password,confirmPassword){
        this.firstName.sendKeys(name);
        this.lastName.sendKeys(lastName);
        this.email.sendKeys(email);
        this.password.sendKeys(password);
        this.confirmPassword.sendKeys(confirmPassword);
        this.btnRegister.click();
    };

}
module.exports=new registerPage();