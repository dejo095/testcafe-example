import { Selector, t } from 'testcafe';

export default class ProductPage {

  private readonly item = Selector('.inventory_item');

  
  // methods
  public GetItem = (idx: number): Selector => this.item.nth(idx);

  public GetItemTitle(idx:number): Promise<string> {
    return this.GetItem(idx).find('.inventory_item_name').innerText;
  }
  
}
