import{test,expect} from '@playwright/test'
import invalidUser from '../../testdata/invalidUsers.json';
for (const data of invalidUser) {
  test(`login Negative Test - ${data.scenario}`, async ({ request }) => {
    const response = await request.post(
      'https://goal-tracker-api.onrender.com/api/v1/auth/login',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        data:data.body
      }
    );
    expect(response.status()).toBe(data.expectedStatus);
    const responseBody = await response.json();
    expect(responseBody.msg).toContain(data.expectedMsg);
  });
}