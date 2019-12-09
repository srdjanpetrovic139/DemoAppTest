var homePage=function(){
//logged out page
this.loginButton=element(by.className('ico-login'));
this.continueShopping=element(by.className('button-2 continue-shopping-button'));

//logged in page
this.myAccBtn=element(by.className('ico-account'));
this.barNotification=element(by.id('bar-notification'));
this.cartNotificationLink=element(by.partialLinkText('shopping cart'));

//this.productPrice=all(by.className('product-unit-price'));
this.list = element.all(by.className('product-name'));
//productBtn
this.macBook=element(by.partialLinkText('MacBook'))
this.addMacBook=element(by.id('add-to-cart-button-4'));

this.digitalStorm=element(by.partialLinkText('Digital Storm'));
this.addDigitalStorm=element(by.className('button-2 product-box-add-to-cart-button'));
this.cartBtn=element(by.className('cart-label'));

this.home=element(by.className('header-logo'));


this.search=element(by.id('small-searchterms'));
this.searchBtn=element(by.className('button-1 search-box-button'));

this.electronics=element(by.partialLinkText('Electronics'));
this.cellPhones=element(by.partialLinkText('Cell phones'));
this.htc=element(by.partialLinkText('Mini'));
this.addHtc=element(by.id('add-to-cart-button-19'));

//checkout
this.checkoutBtn=element(by.id('checkout'));
this.termsOfService=element(by.id('termsofservice'));
this.checkoutTitle=element(by.className('page-title'));
this.addressConfirm=element(by.className('button-1 new-address-next-step-button'));

}
module.exports=new homePage();