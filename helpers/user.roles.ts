import { Role } from 'testcafe';
import LoginPage from '../pages/login.po';

const url = 'https://www.saucedemo.com';
const loginPage = new LoginPage();

export const regularAccUser = Role(url, async t => {
  
  await loginPage.LoginUser('standard_user', 'secret_sauce');
   
}, { preserveUrl: true });

export const noAccUser = Role(url, async t => {

   await loginPage.LoginUser('gdsgsdg', 'sdgsdgs');

}, { preserveUrl: true });
