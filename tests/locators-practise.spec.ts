import {test,expect} from '@playwright/test'
import { TodoPage } from '../pages/TodoPage';
import testData from '../test-data/TodoData.json';
test.describe('Playwright locators&web assertion practice',()=>{ 
    let todopage;
    test('Interaction with locators',async({page})=>{
        todopage= new TodoPage(page);
       for(const data of testData)
        {

        
        //Navigate to login
        await todopage.goto();
       
        //placeholder locator
        await expect(todopage.newTodoInput).toBeVisible;
        await todopage.addTo(data.item1);
        await todopage.addTo(data.item2);

       //Verification
       await todopage.listVerification(data.item1)
     
        //complete the item
       const targetcheckbox= await todopage.selectCheckbox(data.item1);
    //verify only the selected item checked
    await expect(targetcheckbox).toBeChecked();
    
    //'All' link verification
    await todopage.allLinkVerification(data.item1,data.item2);
    

//Verification of 'Active' link
await todopage.activeLinkVerification(data.item1,data.item2);

  //Verification of 'Completed' link
  await todopage.completedLinkVerification(data.item1,data.item2)

        }
        })
});

   
        
