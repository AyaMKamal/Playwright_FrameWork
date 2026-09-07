import { Page} from "@playwright/test";
import { framework } from "../FrameWork/FrameWork";


export class LoginPage
{
    private framework : framework;
    private username;
    private password;
    private button;

      constructor(private page: Page) {
    this.framework = new framework(page);

    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.button = page.getByRole('button', { name: 'Login' });
  }

  async open(url:string)
  {
    await this.framework.Navigate(url);
  }
  async login(username : string, password : string ) :Promise <void>
  {
    await this.framework.fill(this.username,username);
    await this.framework.fill(this.password,password);
    await this.framework.click(this.button);
  }
}