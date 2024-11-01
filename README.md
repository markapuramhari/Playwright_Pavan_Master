Playwright with Javascript tutorial (Pavan SDET-QA):
----------------------------------------------------

1. https://www.youtube.com/watch?v=_TAg4hpdlDU&list=PLFGoYjJG_fqrRjl9Mn0asiAIxmKC1X-N-&pp=iAQB
2. https://github.com/markapuramhari/Playwright_Pavan_Master
3. https://github.com/pavanoltraining/playwrightautomation

Features of Playwright:
-----------------------

01. Free & open source
02. Multi-Browser, Multi-Language
03. Easy setup and configaration
04. Functional, API, Accessibility testing
05. Built-in reports,custom reports
06. CI,CD, Azure pipline,Docker integration
07. Parallel testing
08. Auto wait ,No Flaky tests,Tracing
09. Built-in Assertions
10. Multi tab & multi window support
11. Frames ,Shadow DOM
12. Test Parameter
13. Emulate mobile devies
14. Codegen
15. Playwright inspector, trace viewer
16. Community support
17. Fast execution
18. Headless Mode support
19. API testing
20. Mocha,Jest Frameworks support
21. Debugging
22. High performance

YouTube Videos:
---------------

Part 01: Introduction | Playwright Vs Selenium Vs Cypress
Part 02: Installation
Part 03: How To Create and Run Tests
Part 04: Locating Web Elements | Locators-Property, XPath, CSS
Part 05: Locating Web Elements | Playwright built-in locator methods

Part 06: Record & Play Scripts In Playwright |Test Generator| Codegen
Part 07: Assertions
Part 08: Hard Assertions vs Soft Assertions
Part 09: How to handle Input box & Radio Buttons
Part 10: How to handle Checkboxes

Part 11: How to handle DropDown
Part 12: How to handle Multi Select DropDown
Part 13: How to handle Bootstrap multi select DropDown
Part 14: How to handle Auto Suggest/Auto Complete DropDown
Part 15: How to Handle Hidden Items in DropDown

Part 16: How to Handle Dialogs Or Alerts | alert(),confirm(), prompt()
Part 17: How to Handle Frames/iFrames
Part 18: How to Handle Inner/Nested Frames
Part 19: How to Handle WebTable/Pagination Table
Part 20: How to Handle Date Pickers/Calendars

Part 21: Mouse Hover Action
Part 22: Mouse Right Click/Context Click Action
Part 23: Mouse Double Click Action
Part 24: Mouse Drag And Drop Action
Part 25: Keyboard Actions in Playwright

Part 26: How To upload files in Playwright
Part 27: Hooks - beforeEach, afterEach, beforeAll & afterAll
Part 28: Grouping Tests - Describe Block
Part 29: How to capture Screenshots
Part 30: How to record videos for Tests

Part 31: Trace Viewer
Part 32: How to Tag playwright tests
Part 33: Annotations | Only, Skip,Fail, Fixme & Slow
Part 34: Page Object Model Pattern | POM
Part 35: How To handle Multiple Pages/Windows | Browser Context

Part 36: Reporters | List, Dot, Json, JUnit & HTML Reporters
Part 37: How to Generate Allure Reports
Part 38: How To Retry Failed Test Cases | Retries and Test Flakiness
Part 39: Rest API Testing | HTTP Requests |Get,Post,Put & Delete


CLI Terminal commands:
---------------------

npm init playwright@latest
npm playwright -v

npx playwright test
npx playwright test --headed --project='Google Chrome' --grep=sanity --grep-invert=reg
npx playwright test Test.spec.js --headed --project=chromium --ui
npx playwright test a.spec.js --headed --project='Google Chrome' --project='Microsoft Edge' --project='chromium'
npx playwright test Test.spec.js --headed --project=chromium --debug
npx playwright show-report

npx playwright show-trace test-results/Part_31_Tracing-Tracing-test-chromium/trace.zip
npx playwright test Part_32_Tags.spec.js --headed --project=chromium 
npx playwright test Part_32_Tags.spec.js --headed --project=chromium
npx playwright test Part_38_ReTryTest.spec.js --headed --project=chromium --retries=2  

npx playwright codegen
npx playwright codegen -o tests/newtest.spec.js
npx playwright codegen -o tests/newtest.spec.js --target javascript -b chromium
npx playwright codegen  --device "iPhone 13"
npx playwright codegen --viewport-size "1280,720"



Reporters:
----------

1. List ==> 
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=list
2. Line ==> 
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=line
3. Dot ==> 
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=dot
4. HTML ==> 
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=html
npx playwright show-report
5. Json ==>
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=json
6. JUnit ==>
npx playwright test Part_36_Reporters.spec.js --headed --project=chromium --reporter=junit

Thied party Reporters:
-------------------
1. Allure:  

npm i -D @playwright/test allure-playwright
npm install -g allure-commandline --save-dev
reporter: [['allure-playwright',{outputFolder: 'my-allure-results'}]],   //config file

    CLI:
    ----
    allure generate allure-results -o allure-report --clean
    allure open allure-report

2. Monocart
3. Tesults
4. ReportPortal
5. Currents
6. Serenity/JS





