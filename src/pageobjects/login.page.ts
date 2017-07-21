import {BasePage} from "../helpers/wrapers/base.page";
import {$$, ElementFinder} from "protractor";

export class LoginPage extends BasePage {
  public readonly userNameField: ElementFinder;
  public readonly passField: ElementFinder;
  public signInButton: ElementFinder;

  constructor() {
    super();
    this.userNameField = $$("input[name='username']").first();
    this.passField = $$("input[name='password']").first();
    this.signInButton = $$("button[id='form-undefined-primary-action-button']").first();
  }

}
