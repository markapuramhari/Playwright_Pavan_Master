Features of Playwright:
----------------------

01. Free & open source
02. Multi-Browser, Multi-Language
03. Easy setup and configaration
04. Functional, API, Accessibility testing
05. Built-in reports,custom reports
06. CI,CD, Azure pipline,Docker
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


Playwright with Javascript tutorials:
------------------------------------
https://github.com/pavanoltraining/playwrightautomation
https://github.com/markapuramhari/Playwright_Pavan_Master
https://www.youtube.com/watch?v=_TAg4hpdlDU&list=PLFGoYjJG_fqrRjl9Mn0asiAIxmKC1X-N-&pp=iAQB


DONE ==> Part 01 | Playwright with Javascript | Introduction | Playwright Vs Selenium Vs Cypress
DONE ==> Part 02 | Playwright with Javascript | Installation
DONE ==> Part 03 | Playwright with Javascript | How To Create and Run Tests
DONE ==> Part 04 | Playwright with Javascript | Locating Web Elements | Locators-Property, XPath, CSS
DONE ==> Part 05 | Playwright with Javascript | Locating Web Elements | Playwright built-in locator methods

DONE ==> Part 06 | Playwright with Javascript | Record & Play Scripts In Playwright |Test Generator| Codegen
DONE ==> Part 07 | Playwright with Javascript | Assertions
DONE ==> Part 08 | Playwright with Javascript | Hard Assertions vs Soft Assertions
DONE ==> Part 09 | Playwright with Javascript | How to handle Input box & Radio Buttons
DONE ==> Part 10 | Playwright with Javascript | How to handle Checkboxes

DONE ==> Part 11 | Playwright with Javascript | How to handle DropDown
DONE ==> Part 12 | Playwright with Javascript | How to handle Multi Select DropDown
DONE ==> Part 13 | Playwright with Javascript | How to handle Bootstrap multi select DropDown
DONE ==> Part 14 | Playwright with Javascript | How to handle Auto Suggest/Auto Complete DropDown
DONE ==> Part 15 | Playwright with Javascript | How to Handle Hidden Items in DropDown

DONE ==> Part 16 | Playwright with Javascript | How to Handle Dialogs Or Alerts | alert(),confirm(), prompt()
DONE ==> Part 17 | Playwright with Javascript | How to Handle Frames/iFrames
DONE ==> Part 18 | Playwright with Javascript | How to Handle Inner/Nested Frames
DONE ==> Part 19 | Playwright with Javascript | How to Handle WebTable/Pagination Table
DONE ==> Part 20 | Playwright with Javascript | How to Handle Date Pickers/Calendars

DONE ==> Part 21 | Playwright with Javascript | Mouse Hover Action
DONE ==> Part 22 | Playwright with Javascript | Mouse Right Click/Context Click Action
DONE ==> Part 23 | Playwright with Javascript | Mouse Double Click Action
DONE ==> Part 24 | Playwright with Javascript | Mouse Drag And Drop Action
DONE ==> Part 25 | Playwright with Javascript | Keyboard Actions in Playwright

--------------------------------------------------------------------------------------

Part 26 | Playwright with Javascript | How To upload files in Playwright
Part 27 | Playwright with Javascript | Hooks - beforeEach, afterEach, beforeAll & afterAll
Part 28 | Playwright with Javascript | Grouping Tests - Describe Block
Part 29 | Playwright with Javascript | How to capture Screenshots
Part 30 | Playwright with Javascript | How to record videos for Tests

Part 31 | Playwright with Javascript | Trace Viewer
Part 32 | Playwright with Javascript | How to Tag playwright tests
Part 33 | Playwright with Javascript | Annotations | Only, Skip,Fail, Fixme & Slow
Part 34 | Playwright with Javascript | Page Object Model Pattern | POM
Part 35 | Playwright with Javascript | How To handle Multiple Pages/Windows | Browser Context

Part 36 | Playwright with Javascript | Reporters | List, Dot, Json, JUnit & HTML Reporters
Part 37 | Playwright with Javascript | How to Generate Allure Reports
Part 38 | Playwright with Javascript | How To Retry Failed Test Cases | Retries and Test Flakiness
Part 39 | Playwright with Javascript | Rest API Testing | HTTP Requests |Get,Post,Put & Delete


Terminal commands
-----------------
npm init playwright@latest
npm playwright -v

npx playwright test
npx playwright test --headed
npx playwright test Test.spec.js --headed --project=chromium
npx playwright test Test.spec.js --headed --project=chromium --debug
npx playwright show-report
npx playwright show-trace test-results/Part_31_Tracing-Tracing-test-chromium/trace.zip
npx playwright test Part_32_Tags.spec.js --headed --project=chromium --grep sanity
npx playwright test Part_32_Tags.spec.js --headed --project=chromium --grep sanity --grep-invert reg

npx playwright codegen
npx playwright codegen -o tests/newtest.spec.js
npx playwright codegen -o tests/newtest.spec.js --target javascript -b chromium
npx playwright codegen  --device "iPhone 13"
npx playwright codegen --viewport-size "1280,720"

