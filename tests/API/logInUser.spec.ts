import { test, expect } from '@playwright/test';
import { readUser, saveUser } from '../../utils/userStore';


test('Login using Registered User', async ({ request }) => {

  const user = readUser();

  const res = await request.post(
    "https://goal-tracker-api.onrender.com/api/v1/auth/login",
    {
      headers: { 'Content-Type': 'application/json' },
      data: {
        email: user.email,
        password: user.password
      }
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();
  console.log("🚀 ~ body:", body)


  user.token = body.token;
  saveUser(user);    // 🔥 store token for other APIs
});





