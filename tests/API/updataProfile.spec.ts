import { test, expect } from '@playwright/test';
import auth from './auth.json';

test('User can update profile', async ({ request }) => {
  const response = await request.patch(
    'https://goal-tracker-api.onrender.com/api/v1/auth/updateprofile',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`
      },
      data: {
        name: auth.name,
        email: auth.email,
        oldPassword: auth.password,
        newPassword: 'NewPassword123!'
      }
    }
  );

  expect(response.status()).toBe(200);
});
