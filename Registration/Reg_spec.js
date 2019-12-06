var registerPage=require('./registerPage.js');
describe('Login page',function(){
    
    beforeEach(function(){
        registerPage.get();
    });


    it('73: Fill all fields valid',function(){
        browser.sleep(6000);
        registerPage.fullRegistration('Nikola','Nikolic','nikolanikolic123367@gmail.com','Levi9','123456','123456');
        
        expect(registerPage.regCompleted.getText()).toEqual('Your registration completed');
    });

    it('74: Fill all required field',function(){
        registerPage.cbNewsletter.click();
        registerPage.requiredRegistration('Milutin','Milutinovic','mile1123385@gmail.com','123456','123456');
        
        expect(registerPage.regCompleted.getText()).toContain('completed');
    });

    it('84: Empty fields',function(){
        registerPage.requiredRegistration('','','','','');
        expect(registerPage.reqFristName.getText()).toEqual('First name is required.');
        expect(registerPage.reqLastName.getText()).toEqual('Last name is required.');
        expect(registerPage.reqEmail.getText()).toEqual('Email is required.');
        expect(registerPage.reqPassword.getText()).toEqual('Password is required.');
        expect(registerPage.reqConfPassword.getText()).toEqual('Password is required.');
    });

    it('75: First name validations',function(){
        registerPage.requiredRegistration('','Markovic','markovic@gmail.com','123456','123456');
        expect(registerPage.reqFristName.getText()).toEqual('First name is required.');
    });

    it('77: Last name validations',function(){
        registerPage.requiredRegistration('Marko','','markovic@gmail.com','123456','123456');
        expect(registerPage.reqLastName.getText()).toEqual('Last name is required.');
    });

    it('85: Empty email field',function(){
        registerPage.requiredRegistration('Marko','Markovic','','123456','123456');
        expect(registerPage.reqEmail.getText()).toEqual('Email is required.');
    });

    it('79: Email validation(input something thats not a email)',function(){
        registerPage.requiredRegistration('Marko','Markovic','aaaaa','123456','123456');
        expect(registerPage.validationError.getText()).toEqual('Wrong email');
    });

    it('86: Valid password',function(){
        registerPage.requiredRegistration('Marko','Markovic','markovic@gmail.com','123','123456');
        expect(registerPage.validationError.getText()).toContain('must have at least 6 characters');
    });

    it('83: Confirm password(wrong)',function(){
        registerPage.requiredRegistration('Marko','Markovic','markovicm@gmail.com','123456','654321');
        expect(registerPage.validationError.getText()).toContain('do not match');
    });

    it('Account already exists',function(){
        registerPage.requiredRegistration('Milutin','Milutinovic','mile13385@gmail.com','123456','123456');
        expect(registerPage.validationAleradyExists.getText()).toEqual('The specified email already exists');
    });

});