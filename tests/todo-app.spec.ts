import { test, expect } from '@playwright/test';

test.describe('TodoMVC Application Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the demo app before each test
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('should allow adding new todo items', async ({ page }) => {
    const newTodoInput = page.getByPlaceholder('What needs to be done?');

    // Add first todo item
    await newTodoInput.fill('Learn Playwright with TypeScript');
    await newTodoInput.press('Enter');

    // Add second todo item
    await newTodoInput.fill('Integrate AI into test framework');
    await newTodoInput.press('Enter');

    // Verify both items were added to the list
    const todoList = page.getByTestId('todo-title');
    await expect(todoList).toHaveCount(2);
    await expect(todoList.first()).toHaveText('Learn Playwright with TypeScript');
  });

  test('should mark an item as completed', async ({ page }) => {
    const newTodoInput = page.getByPlaceholder('What needs to be done?');

    await newTodoInput.fill('Build production framework');
    await newTodoInput.press('Enter');

    // Click the checkbox next to the item
    const todoItem = page.getByTestId('todo-item');
    await todoItem.getByRole('checkbox').check();

    // Verify item is marked as completed
    await expect(todoItem).toHaveClass(/completed/);
  });
});