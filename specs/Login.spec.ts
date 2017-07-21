import {browser} from "protractor";
import {LoginPage} from "../src/pageobjects/login.page";

const loginPage = new LoginPage();
const loginUser = {
  name: 'jsauto',
  password: 'Mule1234'
};

describe("Given Anypoint platform Login page", () => {
  beforeAll(() => {
    browser.get('http://qax.anypoint.mulesoft.com');
  });

  it("should have a title", () => {
    expect(browser.getTitle()).toBe("Anypoint Platform");
  });

  describe("when user logged in", () => {
    beforeAll(() => {
      loginPage.userNameField.sendKeys(loginUser.name);
      loginPage.passField.sendKeys(loginUser.password);
      loginPage.signInButton.click();
    });

    it("then title changes", () => {
      expect(browser.getTitle()).toBe("Anypoint Platform");
    });
  });
});
