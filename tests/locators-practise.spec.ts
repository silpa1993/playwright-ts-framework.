import {test,expect} from '@playwright/test'
import { TodoPage } from '../pages/TodoPage';
test.describe('Playwright locators&web assertion practice',()=>{
    let todopage;
    test('Interaction with locators',async({page})=>{
        todopage= new TodoPage(page);
        const item1='Hello';
        const item2='Active';
        //Navigate to login
        await todopage.goto();
       
        //placeholder locator
        await expect(todopage.newTodoInput).toBeVisible;
        await todopage.addTo(item1);
        await todopage.addTo(item2);

       //Verification
       await todopage.listVerification(item1)
     
        //complete the item
       const targetcheckbox= await todopage.selectCheckbox(item1);
    //verify only the selected item checked
    await expect(targetcheckbox).toBeChecked();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    //'All' link verification
    await todopage.allLinkVerification(item1,item2);
    

//Verification of 'Active' link
await todopage.activeLinkVerification(item1,item2);

  //Verification of 'Completed' link
  await todopage.completedLinkVerification(item1,item2)
 
 
   
   
   

    })
});
