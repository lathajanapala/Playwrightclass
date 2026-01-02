import { test, expect } from '@playwright/test';
import auth from './auth.json';

test('verify the orders list', async ({ request }) => {
    await request.post(
        'https://goal-tracker-api.onrender.com/api/v1/goals',
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-Type': 'application/json',
          },
          data: {
            title: 'Learn Playwright',
            description: 'API automation practice'
          }
        }
      );

  const response = await request.get(
    'https://goal-tracker-api.onrender.com/api/v1/goals',
    {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});
