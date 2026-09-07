import { Page, Locator } from '@playwright/test';


export class framework {
  constructor(protected page: Page) {}


// =========================================================
  // Navigation
  // =========================================================

  async Navigate (url : string): Promise<void>
  {
    await this.page.goto(url);
  }

    async NavigateBack (): Promise<void>
  {
    await this.page.goBack();
  }

    async NavigateForward (): Promise<void>
  {
    await this.page.goForward();
  }

  async PageReload (): Promise<void>
  {
    await this.page.reload();
  }
  

// =========================================================
  // ElementsAction
  // =========================================================
  async click(locator: Locator): Promise<void> {
    await locator.click();
    }

  async fill (locator : Locator, text : string): Promise<void>
  {
    await locator.fill(text);
  }

  async Clear(locator : Locator ): Promise<void>
  {
    await locator.clear();
  }

  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent())?.trim() ?? '';
  }

  async getValue(locator:Locator) :Promise<string> 
  {
    return (await locator.inputValue());
  }


  async ScrollToElement(locator:Locator): Promise<void>
  {
    await locator.scrollIntoViewIfNeeded();
  }

  async Hover (locator:Locator): Promise<void>
  {
    await locator.hover();
  }

// =========================================================
  // CheckBox
  // =========================================================
  async CheckboxSelect(locator:Locator): Promise<void>
  {
    if (!(await locator.isChecked()))
    { await locator.check();}
   
  }

    async Checkbox_uncheck(locator:Locator): Promise<void>
  {
    if (await locator.isChecked())
    { await locator.uncheck();}
  }

  // =========================================================
  // DropDown
  // =========================================================
  async DropDownSelectByLabel (locator:Locator , Label:string): Promise<void>
  {
    await locator.selectOption(Label);
  }

  async DropDownSelectByValue(locator:Locator , Value :string): Promise<void>
  {
    await locator.selectOption(Value);

  }

    // =========================================================
  // Keyboard
  // =========================================================

  async keyboardShourtcut(locator :Locator, Keyboard:string): Promise<void>
  {
    await locator.press(Keyboard);
  }

  /***********************Alerts***************/
  async AcceptAlert(): Promise<void>
{
  const dialog = await this.page.waitForEvent('dialog');
  await dialog.accept();
}

  async DismissAlert(): Promise<void>
{
  const dialog = await this.page.waitForEvent('dialog');
  await dialog.dismiss();
}

}
