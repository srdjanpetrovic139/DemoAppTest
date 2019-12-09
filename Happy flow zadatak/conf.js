 const Reporter = require('jasmine-2-testrail')
 const reporter = new Reporter({
 });

exports.config={
    framework:'jasmine',
    directConnect:true,
    specs:['spec.js'],
    capabilities: {
        'browserName': 'chrome'
      },
      
      
    onPrepare(){
        browser.ignoreSynchronization=true;
        jasmine.getEnv().addReporter(reporter);
    },
    afterLaunch: () => {
          // The first parameter is the project ID, and the second is the suite ID
          reporter.createRun(4, 4, browser.params.runName)
          // afterLaunch needs to return a promise in order
          // to execute asynchronous code (used the most basic promise)
          return new Promise(() => true)
    }
      
    
}