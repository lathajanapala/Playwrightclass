import { test,expect } from '@playwright/test';
// import { readUser, saveUser } from '../../utils/userStore';
test("verify the orders list",async({request})=>{
    const response = await request.get("https://goal-tracker-api.onrender.com/api/v1/goals");
    expect(response.status()).toBe(200)

})