import{test,expect} from '@playwright/test'
import path from 'path'
test("Upload a multiple files ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //find a path where files are located:const file1 = path.resolve('testdata/text1.txt');
    //const file2 = path.resolve('testdata/text2.txt');
    //find the locator for the choose file button   #singleFileInput
    // find the locator for upload file button:#singleFileForm:has-text("Upload Single File")
    //find stattus update loactor:  #singleFileStatus
  const filesInput = page.locator('#multipleFilesInput');
  const uploadButton = page.getByRole('button', { name: 'Upload Multiple Files' });
  const status = page.locator('#multipleFilesStatus');

  const file1 = path.resolve('testdata/text1.txt');
  const file2 = path.resolve('testdata/text2.txt');

  await Promise.all([
    filesInput.setInputFiles([file1, file2]),
    uploadButton.click(),
  ]);

  await expect(status).not.toBeEmpty();
  await page.screenshot({path:'screenShots/uploadButton.png'})
});

