import { test, expect } from '@playwright/test';
import { saveUser } from '../../utils/userStore';

test('Register User', async ({ request }) => {

  const user = {
    name: "pushpalatha",
    email: `pushpa_${Date.now()}@example.com`,
    password: "Password123456!"
  };

  const res = await request.post(
    "https://goal-tracker-api.onrender.com/api/v1/auth/register",
    {
      headers: { 'Content-Type': 'application/json' },
      data: user
    }
  );

  expect(res.status()).toBe(201);

  saveUser(user);
  console.log(await res.json())   // 🔥 Persist user for login test
});

