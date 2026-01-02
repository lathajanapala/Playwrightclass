// tests/API/globalSetup.ts
import { request } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export default async () => {
  const api = await request.newContext({
    baseURL: 'https://goal-tracker-api.onrender.com'
  });

  const user = {
    name: 'pushpalatha',
    email: `pushpa_${Date.now()}@example.com`,
    password: 'Password123456!'
  };

  // Register
  await api.post('/api/v1/auth/register', {
    data: user
  });

  // Login
  const res = await api.post('/api/v1/auth/login', {
    data: {
      email: user.email,
      password: user.password
    }
  });

  const body = await res.json();

  const authData = {
    ...user,
    token: body.token
  };

  fs.writeFileSync(
    path.join(__dirname, 'auth.json'),
    JSON.stringify(authData, null, 2)
  );
};
