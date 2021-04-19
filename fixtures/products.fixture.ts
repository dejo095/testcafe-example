import DashboardPage from '../pages/dashboard.po';
import {ProductsSortOptions, Timeouts} from '../helpers/enums';
import { regularAccUser } from '../helpers/user.roles';

fixture `Products page`
.beforeEach( async t => {
    await t.
    useRole(regularAccUser).
    maximizeWindow();
});
  
const dashboard = new DashboardPage();

test
('Sorting of products should work', async t => {

  const productTitleDefault = await dashboard.productPage.GetItemTitle(0);
  
  // sort
  await dashboard.ChooseSortProducts(ProductsSortOptions.PriceAsc);
  const productTitle = await dashboard.productPage.GetItemTitle(0);
  
  await t.
  expect(productTitle).
  notEql(productTitleDefault, 'sort is not ok', { timeout: Timeouts['5sec']});

})
