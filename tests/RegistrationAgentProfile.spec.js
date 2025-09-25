import { test, expect } from "@playwright/test";
import { parseEnv } from "util";

test("Agent Profile Registration Process", async ({ page }) => {
  // Application URL
  await page.goto("https://authorized-partner.netlify.app/login");

  // Clicked on SignUp link forthe registration

  await page.locator("//a[normalize-space()='Sign Up']").click();

  // Terms and Condition page for registration

  await page.locator("//button[@id='remember']").check();

  // validation for remember box
  await expect(page.locator("//button[@id='remember']")).toBeChecked();

  //continue to the application after checked

  await page.locator("//button[normalize-space()='Continue']").click();

  await page.waitForTimeout(5000);

  //Account SetUp Form

  await page.locator("#«r0»-form-item").fill("Ashok");

  await page.locator("#«r1»-form-item").fill("Khatiwada");

  await page.locator("#«r2»-form-item").fill("apidakosha1328@gmail.com");

  await page.locator("#«r4»-form-item").fill("9845698713");

  await page.locator("//input[@name='password']").fill("Ashok@123");

  await page.locator("//input[@name='confirmPassword']").fill("Ashok@123");

  await page.waitForTimeout(5000);

  await page.locator("//button[normalize-space()='Next']").click();

  await page.waitForTimeout(3000);

  //Login Page

  await page
    .locator(
      "span[class='flex items-center cursor-pointer text-[13px] h-[18px] lg:text-md lg:h-[22px] w-fit']"
    )
    .click();

  await page.locator("#email").fill("apidakosha1328@gmail.com");

  await page.locator("#password").fill("Ashok@123");

  await page.locator("//button[normalize-space()='Log In']").click();

  //await page.locator("//input[@placeholder='Search...']").fill('Nepal').click();

  //await page.locator("//span[normalize-space()='Nepal']").click();

  // given some wait to see how the workflowed

  await page.waitForTimeout(3000);

  await page.locator("//button[normalize-space()='Back']").click();

  await page.waitForTimeout(3000);

  await page.locator("//button[normalize-space()='Back']").click();

  //Agency Details Form

  // await page.locator("#«r8t»-form-item").fill("Beast Sports Center");

  await page.getByRole("textbox", { name: "Name" }).fill("Beast Sport Center");

  // await page.locator("#«r8u»-form-item").fill("Manager");

  await page.getByRole("textbox", { name: "Role in Agency" }).fill("Manager");

  // await page.locator("#«r8v»-form-item").fill("Beast22@gmail.com");

  await page
    .getByRole("textbox", { name: "Email Address" })
    .fill("Beast22@gmail.com");

  // await page.locator("#«r90»-form-item").fill("Beast.org.np");

  await page.getByRole("textbox", { name: "Website" }).fill("Beast.org.np");

  // await page.locator("#«r91»-form-item").fill("Kalanki, Kathmandu");

  await page
    .getByRole("textbox", { name: "Address", exact: true })
    .fill("Lalitpur");

  await page.getByRole("combobox").click();

  await page.locator("//input[@placeholder='Search...']").fill("Nepal");

  await page.locator("//span[normalize-space()='Nepal']").click();

  await page.getByRole("combobox").click();

  await page.waitForTimeout(3000);

  await page.locator("//button[normalize-space()='Next']").click();

  await page.waitForTimeout(3000);

  await page.locator("//button[normalize-space()='Back']").click();


  //Professional Experience Form

  await page.getByRole("combobox", { name: "Years of Experience" }).click();

  await page.locator("//div[@dir='ltr']//div[3]").click();

  await page
    .getByRole("spinbutton", { name: "Number of Students Recruited" })
    .fill("30");

  await page.getByRole("textbox", { name: "Focus Area" }).fill("Nepal");

  await page.getByRole("spinbutton", { name: "Success Metrics" }).fill("85");

  //selecting muitiple checkboxes

  /*const serviceProvided = [
    "//button[@id='«ru8»-form-item']",
    "//button[@id='«ru9»-form-item']",
    "//button[@id='«rua»-form-item']",
  ];

  for (const locator of serviceProvided) {
    await page.locator(locator).check();
    await expect(await page.locator(locator).isChecked());
  }   */

  await page.getByRole("checkbox", { name: "Career Counseling" }).check();

  await page.getByRole("checkbox", { name: "Admission Applications" }).check();

  await page.waitForTimeout(3000);

  await page.locator("//button[normalize-space()='Next']").click();

  // Verification and Preferences Form

  await page
    .getByRole("textbox", { name: "Business Registration Number" })
    .fill("76531423656313");

  await page.getByRole("combobox", {name: "Preferred Countries"}).click();

  await page.locator("//span[normalize-space()='New Zealand']").click();

  await page.getByRole("checkbox",{name: "Universities"}).check();

  await page
    .getByRole("textbox", { name: "Certification Details" })
    .fill("Quality Assurance Training");

  // await page.locator("//button[normalize-space()='Submit']").click();
});
