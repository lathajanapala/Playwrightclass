import { test, expect } from '@playwright/test';
import { readUser, saveUser } from '../../utils/userStore';

test("User can update name, email, password", async ({ request }) => {

  const user = readUser();
 const newPassword = "pushpa859840"

  // 🔹 Update profile
  const response = await request.patch(
    "https://goal-tracker-api.onrender.com/api/v1/auth/updateprofile",
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.token}`
      },
      data: {
        name: user.name,          // ✅
        email: user.email,        // ✅
        oldPassword: user.password, // ✅ critical
        newPassword: newPassword
      }
    }
  );
console.log(user.token)
  expect(response.status()).toBe(200);
  user.password = newPassword;
  console.log("🚀 ~ response:", await response.json())


  // 🔹 Login again because password changed



  // 🔹 Save new token + password

});
