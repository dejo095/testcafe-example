import { Selector, t } from 'testcafe';

export default class LoginPage {

  private readonly _loginField = Selector('#user-name');
  private readonly _passwordField = Selector('#password');
  private readonly _loginBtn = Selector('#login-button');

  private readonly _error = Selector('h3').withAttribute('data-test', 'error');

  public async LoginUser(userTxt: string, passTxt: string): Promise<void> {

    await t.
    typeText(this._loginField, userTxt).
    typeText(this._passwordField, passTxt).
    click(this._loginBtn);

  }

  public GetError = (): Selector => this._error;

}
