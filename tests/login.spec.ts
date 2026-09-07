import { test, expect } from '@playwright/test';
import { LoginPage } from './Pages/loginpage';


test('LoginTest', async ({ page }) => {
 
  const loginpage = new LoginPage(page);

  await loginpage.open("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await loginpage.login("Admin", "admin123");


});

