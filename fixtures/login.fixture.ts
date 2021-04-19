import LoginPage from '../pages/login.po'
import DashboardPage from '../pages/dashboard.po';
import {Timeouts} from '../helpers/enums';
import { regularAccUser, noAccUser } from '../helpers/user.roles';

fixture `Loging page`.
beforeEach(async t => await t.maximizeWindow())

  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  
  test.
  before(async t => await t.useRole(noAccUser))

  ('Login with invalid credentials', async t => {
    
    await t.
    expect(loginPage.GetError().exists).
    ok('error didnt show on login', { timeout: Timeouts['5sec']});
    
  });
  
  test
  ('Login with valid credentials', async t => {
      
    await t.
    useRole(regularAccUser);
  
    await t.
    expect(dashboardPage.productPage.GetItem(0).exists).
    ok('products dont exist', { timeout: Timeouts['5sec']});
  
  });