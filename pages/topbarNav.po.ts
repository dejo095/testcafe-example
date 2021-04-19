import { Selector, t } from 'testcafe';

export default class TopbarNavPage {

  private readonly _wrapper = Selector('.header_secondary_container');

  private readonly _title = this._wrapper.find('.title');

  public selectBox = Selector('.product_sort_container');

  public selectBoxOption = this.selectBox.find('option');

  
  // METHODS
  public GetTitle = (): Promise<string> => this._title.innerText;

  

}
