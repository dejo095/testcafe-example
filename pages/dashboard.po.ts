import { Selector, t } from 'testcafe';
import ProductPage from './product.po';
import TopbarNavPage from './topbarNav.po';

export default class DashboardPage {
  
  private readonly _hamburgerMenuBtn = Selector('.bm-burger-button');
  private readonly _menuListWrapper = Selector('nav.bm-item-list');
  private readonly _menuListItems = this._menuListWrapper.find('a.bm-item menu-item');
  
  
  // objects
  topbarNavPage = new TopbarNavPage();
  productPage = new ProductPage();


  // methods
  public async ChooseSortProducts(text: string): Promise<void> {

    await t.
    click(this.topbarNavPage.selectBox).
    click(this.topbarNavPage.selectBoxOption.withText(text)); 

  }

  public async ToggleHamburgerMenu() {

     await t.
     click(this._hamburgerMenuBtn);

  }




}
