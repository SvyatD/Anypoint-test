import {browser, Config} from "protractor";
import {SpecReporter} from "jasmine-spec-reporter";

let conf: Config = {
  directConnect: true,
  specs: [
      "../specs/*.spec.js"
  ],
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },
  SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;
