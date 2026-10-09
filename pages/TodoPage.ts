import { Page,Locator,Expect, expect } from "@playwright/test";
export class TodoPage{
    readonly page:Page;
    readonly newTodoInput: Locator;
    readonly todoItems: Locator;
    readonly todoList:Locator;
    readonly allHref:Locator;
    readonly activedHref:Locator;
    readonly completedHref:Locator;
    

constructor(page:Page){
this.page=page;
this.newTodoInput = page.getByPlaceholder('What needs to be done?');
this.todoItems = page.getByTestId('todo-item');
this.todoList=page.getByTestId('todo-title');
this.allHref=page.locator('a[href="#/"]');
this.activedHref=page.locator('a[href="#/active"]');
this.completedHref=page.locator('a[href="#/completed"]');

}
async goto(){
    await this.page.goto('https://demo.playwright.dev/todomvc');

}
async addTo(text:string){
await this.newTodoInput.fill(text);
await this.newTodoInput.press('Enter');
}
async selectCheckbox(text:string)
{
   const targetrow= await this.todoItems.filter({hasText:text});
   const targetcheckbox= await targetrow.getByRole('checkbox',{name:'Toggle Todo'});
    targetcheckbox.check();
    return targetcheckbox;
    
}
async completedStatusCheck()
{
    await expect(this.todoItems).toHaveClass(/completed/);
}
async listVerification(text1:string)
{
    await expect(this.todoList).toHaveCount(2);
        await expect(this.todoList.first()).toHaveText(text1);
}
//verification of 'All' link 
async allLinkVerification(text1:string,text2:string)
{
    await this.allHref.click();
    await this.page.screenshot({ path: 'screenshotall.png', fullPage: true });
  await expect( this.todoItems.filter({hasText:text1})).toBeVisible;
   await expect(this.todoItems.filter({hasText:text2})).toBeVisible;
} 
//Verification of 'Active' link
async activeLinkVerification(text1:string,text2:string)
{
   await this.activedHref.click();
   await this.page.screenshot({ path: 'screenshotactive.png', fullPage: true });
   await expect( this.todoItems.filter({hasText:text1})).toBeHidden;
   await expect(this.todoItems.filter({hasText:text2})).toBeVisible;
}

//Verification of 'Completed' link
async completedLinkVerification(text1:string,text2:string)
{
    await this.completedHref.click();
    await this.page.screenshot({ path: 'screenshotcompleted.png', fullPage: true });
    await expect( this.todoItems.filter({hasText:text1})).toBeVisible;
   await expect(this.todoItems.filter({hasText:text2})).toBeHidden;

}
}
