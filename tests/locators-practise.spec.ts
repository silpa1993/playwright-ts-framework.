import {test,expect} from '@playwright/test'
test.describe('Playwright locators&web assertion practice',()=>{
    test('Interaction with locators',async({page})=>{
        //Navigate to login
        await page.goto('https://demo.playwright.dev/todomvc');
        //placeholder locator
        const locplaceholder= await page.getByPlaceholder('What needs to be done?');
        await expect(locplaceholder).toBeVisible;
        const item1='Hello';
        const item2='Active'
       await locplaceholder.fill(item1);
       await locplaceholder.press('Enter');
       await locplaceholder.fill(item2);
       await locplaceholder.press('Enter');
       //Verification
       const  verifytodo= await page.getByText(item1);
        await expect(verifytodo).toBeVisible();
        //complete the item
    const targetrow= await page.getByTestId('todo-item').filter({hasText:item1});
    const targetcheckbox= await targetrow.getByRole('checkbox',{name:'Toggle Todo'});
    targetcheckbox.check();
    //verify only theitem checked
    await expect(targetcheckbox).toBeChecked();
    await expect(targetrow).toHaveClass('completed');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
const allhref= await page.locator('a[href="#/"]');

await allhref.click();
await page.screenshot({ path: 'screenshotall.png', fullPage: true });
  await expect( page.getByTestId('todo-item').filter({hasText:item1})).toBeVisible;
   await expect(page.getByTestId('todo-item').filter({hasText:item2})).toBeVisible;
   const activedhref=await page.locator('a[href="#/active"]');
await activedhref.click();
await page.screenshot({ path: 'screenshotactive.png', fullPage: true });
  await expect(page.getByTestId('todo-item').filter({hasText:item1})).toBeHidden;
   await expect(page.getByTestId('todo-item').filter({hasText:item2})).toBeVisible;
   
   const completedhref=await page.locator('a[href="#/completed"]');
await completedhref.click();
 await page.screenshot({ path: 'screenshotcompleted.png', fullPage: true });
  await expect(page.getByTestId('todo-item').filter({hasText:item2})).toBeHidden;
   await expect(page.getByTestId('todo-item').filter({hasText:item1})).toBeVisible;
   
   
   

    })
});
