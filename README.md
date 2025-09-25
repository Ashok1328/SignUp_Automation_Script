# SignUp_Automation_Script
The Authorized Partner Automation Testing with its Registration process validation and Login into Application
Execution Steps to run Playwright that does the automation testing:
1. Install Node.js
2. Install latest Playwright through terminal "npm init playwright@latest" or you can find documentation at "Playwright.dev"
3. Import playwright in yuur files where you named your filed including "spec.js"
4. Write you test at "tests" folder where you exeute the application testing
5. Run npx playwright test 'filename'.spec.js in your terminal that will execute your code in three different browser i.e. Chrome, WebKit(Safari) and Firefox
6. Run npx playwright test 'filename'.spec.js --project=chromium in your terminal that will execute your code in Chrome Browser
7. Run npx playwright test 'filename'.spec.js --project=chromium --headed/headless in your terminal that will execute your code with or without opening the application
8. Run npx playwright test 'filename.spec.js --project=chromium --headed --debug in your terminal that will help you to run your code step by step
Run npx playwright codegen in your terminal that will help to record abd play script in playwright
