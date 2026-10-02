import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
test.describe('TodoMVC Application Tests', () => {
  let todoPage:TodoPage;
  test.beforeEach(async ({ page }) => {

    todoPage=new TodoPage(page);
    // Navigate to the demo app before each test
    await todoPage.goto();
  });

  test('should allow adding new todo items', async ({ page }) => {
    const newTodoInput = todoPage.newTodoInput;

    // Add first todo item
    const string1='Learn Playwright with TypeScript'
    await todoPage.addTo(string1);
        // Add second todo item
    await todoPage.addTo('Integrate AI into test framework');

    // Verify both items were added to the list
    await todoPage.listVerification(string1);
    
  });

  test('should mark an item as completed', async ({ page }) => {
    await todoPage.addTo('Build production framework');


    // Click the checkbox next to the item
    await todoPage.selectCheckbox('Learn Playwright with TypeScript');

    // Verify item is marked as completed
    await todoPage.completedStatusCheck();
  });
});