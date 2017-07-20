import {browser} from "protractor";

describe("Given Anypoint platform Login page", () => {
  browser.get('http://qax.anypoint.mulesoft.com');
});

it("should have a title", () => {
  expect(browser.getTitle()).toBe('Anypoint Platform');
});