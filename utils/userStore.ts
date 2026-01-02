import fs from 'fs';
import path from 'path';


 const filePath = path.join(process.cwd(), 'testdata', 'createUser.json');

export function saveUser(data: any) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function readUser() {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//   export function writeUser(updatedUser: any) {
//     // fs.writeFileSync(
    //   userFilePath,
    //   JSON.stringify(updatedUser, null, 2),
    //   "utf-8"
    // );
}


