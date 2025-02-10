CMD:
----

npx playwright test --grep=@03To10 --grep='@03To10 | @11To20' --grep-invert=@11To20 --headed --project='Google Chrome' --project='Microsoft Edge' --workers=4 --reporter=html --retries=1 --last-failed --fail-on-flaky-tests --timeout=40000 --trace=retain-on-failure

npm install @playwright/test@latest --> update latest version
npx playwright --version

npx kill-port 9323

WishInfinite Youtube
--------------------

Playwright with TypeScript / JavaScript Series - https://www.youtube.com/playlist?list=PL83cimSRP5ZmwhC6u255huRwSi9tlP-nc

Playwright API Testing - https://www.youtube.com/playlist?list=PL83cimSRP5ZlwSHlydctQ2njy0nTtjpPZ

Learn Playwright in 60 Seconds (Shorts Playlist) - https://www.youtube.com/playlist?list=PL83cimSRP5ZlgDL11AGCufbTmADTOwHhO

Playwright Notes - https://docs.google.com/document/d/1O5NSFhHGc9icU3rfERSolAhLUxy2NxyiujsztN3ICL8/edit?usp=sharing



Interview Q%A -PW
-----------------

https://www.youtube.com/playlist?list=PLrEdqqBKCEUfrX1MkaJOGzSz8Ul7vCtGh -->PW 
https://www.youtube.com/watch?v=JBzjbpAzWH8 --> PW



Interview Q%A -JavaScript
-------------------------

https://factohr.com/javascript-coding-interview-questions-and-answers/

https://www.youtube.com/playlist?list=PLFGoYjJG_fqqJC5ODNTPLhv5MUKVkYakh --JS Naveen
https://www.youtube.com/playlist?list=PLrEdqqBKCEUfw9EYnld79hhGCRircrcub -->JS Part 1
https://www.youtube.com/playlist?list=PLrEdqqBKCEUcvRDM8dtC1mUsQ785B2nLV --> JS Part 2
https://www.youtube.com/watch?v=OEQpRTXfxoo -->JS
https://www.youtube.com/watch?v=4oDcgaIJOZ0 -->JS
https://www.youtube.com/watch?v=O4uuPOHfefg&list=PL3aZbxdSiCbPq0iHyLPgD4N5q2rHrP8wR&index=2 -->JS


Playwright with Javascript tutorial (WishInfinite):
----------------------------------------------------

https://www.youtube.com/playlist?list=PL83cimSRP5ZmwhC6u255huRwSi9tlP-nc

https://docs.google.com/document/u/0/d/e/2PACX-1vQWL3T7iUD8DeMPM4OV2x6ZaW8aQgYw2Z7gIQTVmNYa-QhFeo5rT29BTJ5427-QqoBHKokVtLUbU1oy/pub?pli=1#h.h1ws1iewxy6m

GIT:

https://github.com/Wish-Infinite/playwright-tutorials-typescript-javascript.git


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
17. Fast execution (websocket)
18. Headless Mode support
19. API testing
20. Mocha,Jest Frameworks support
21. Debugging
22. High performance

Tapics Practice:
----------------

Part_03_HomepageTest 
Part_04_LoginpageTest 
Part_04_PrintLinksAndProductsTest 
Part_05_Built-in_Locators 

Part_07_Assertions 
Part_08_SoftAssertions 
Part_09_Inputbox 
Part_09_RadioButtons 
Part_10_Checkboxes 

Part_11_DropDowns 
Part_12_MultiSelectDropDown 
Part_13_BootstrapDropDown 
Part_14_AutoSuggestDropDown 
Part_15_HiddenDropDown 

Part_16_Alerts 
Part_17_HandleFrames 
Part_18_HandleInnerFrames 
Part_19_Table 
Part_20_DatePicker 

Part_21_MouseHover 
Part_22_MouseRightClick 
Part_23_MouseDoubleClick 
Part_24_DragAndDrop 
Part_25_KeyboardActions 

Part_26_UploadFiles 
Part_27_Hooks_All 
Part_27_Hooks_Each 
Part_27_Hooks 
Part_28_Grouping_Hooks 

Part_29_Screenshots 
Part_30_RecordVideo_Screenshots 
Part_31_Tracing 
Part_32_Tags 
Part_33_Annotations 

Part_34_POMTest 
Part_35_HandlingWindows 
Part_36_Reporters 
Part_38_ReTryTest 

Part_39_DDT_JSON_Test 
Part_40_DDT_CSV_Test 


CLI Terminal commands:
---------------------

npm init playwright@latest
npm playwright -v

npx playwright test --grep=03To10 --headed --project='Google Chrome' --workers=4 --reporter=html --last-failed --retries=1
npx playwright test --grep=03To10 --headed --project='Google Chrome' --workers=1
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

test.describe.configure({mode:'serial'})
await page.locator('#APjFqb').pressSequentially('selenium',{delay:500})

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



==============================================================================================




----------------------------------------------------------------------------------------

Numbers
--------

01. sum of all the numbers
02. average value
03. largest and smallest numbers
04. prime or not
05. even And Odd Numbers
06. removes the duplicates
07. ascending order
08. removes all the false values
09. factorial of a number
10. Fibonacci sequence 
11. single-dimensional array
12. finds the index of a specific element




01. Write a program that finds the sum of all the numbers in an array

function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
const result = sumOfNumbers(numbers);
console.log("The sum of the numbers is:", result);

----------------------------------------------------------------------------------

02. Write a JavaScript function that shows an array's average value of numbers

function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0; // Handle empty array
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
}
const numbers = [10, 20, 30, 40, 50];
const averageValue = calculateAverage(numbers);
console.log("The average value is:", averageValue);


-------------------------------------------------------------------------------

03. Write a function to find the largest and smallest numbers in the array from the set of a given array of numbers

function findLargestAndSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        } else if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return { largest, smallest };
}
const numbers = [10, 5, 25, 8, 15];
const result = findLargestAndSmallest(numbers);
console.log("Largest number:", result.largest);
console.log("Smallest number:", result.smallest);





-------------------------------------------------------------------------------------

04. Write a JavaScript program to check whether the given number is prime or not

function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false; // If divisible by any number between 2 and the square root of a number, it's not prime
        }
    }
    return true; // If the loop completes without finding a divisor, the number is prime
}
const num = 17;
const isPrimeResult = isPrime(num);
if (isPrimeResult) {
    console.log(num, "is a prime number.");
} else {
    console.log(num, "is not a prime number.");
}


------------------------------------------------------------------------------------

05. Write a JavaScript function that uses an array of numbers and only gives a new array with even And Odd Numbers

function evenAndOddNumbers(numbers) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenArray.push(numbers[i]);
        } else if(numbers[i] % 2 === 1){
            oddArray.push(numbers[i]);
        }
    }
    return {evenArray,oddArray};
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = evenAndOddNumbers(numbers);
console.log("Even numbers:", result.evenArray);
console.log("Odd numbers:", result.oddArray);


---------------------------------------------------------------------------


06. Write a function that removes the duplicates from an array


function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}
const numbers = [1, 2, 3, 2, 4, 5, 1, 4];
const uniqueNumbers = removeDuplicates(numbers);
console.log("Unique numbers:", uniqueNumbers);

--------------------------------------------------------------------------------------



07. Write a function that categorizes an array of numbers in ascending order


function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedNumbers = sortNumbersAscending(numbers);
console.log(sortedNumbers); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]

------------------------------------------------------------------------------


08. Write a JavaScript function that removes all the false values (false, null, 0, “”, unidentified, NaN) from an array

function removeFalseValues(arr) {
    return arr.filter(Boolean); // Filter out false values using Boolean as the filter function
}
const inputArray = [1, 0, false, null, "", "hello", undefined, NaN, 2]; // Fixed the string "hello"
const filteredArray = removeFalseValues(inputArray);
console.log("Filtered array:", filteredArray);


--------------------------------------------------------------------------------------------

09. Write a JavaScript program that calculates the factorial of a number

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const number = 5;
const result = factorial(number);
console.log("Factorial of", number, "is", result);


-----------------------------------------------------------------------------

10. Write a JavaScript function that returns the Fibonacci sequence to a specified number


function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0]; // Return [0] if n is 1
    }
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
const terms = 10;
const fibonacciSequence = fibonacci(terms);
console.log(fibonacciSequence);


----------------------------------------------------------------------------------------

11. Write a function that flattens a nested array in a single-dimensional array


function flattenArray(arr) {
    const flattened = [];
    function flattenHelper(nestedArr) {
        for (let item of nestedArr) {
            if (Array.isArray(item)) {
                flattenHelper(item); // Recursively flatten nested arrays
            } else {
                flattened.push(item); // Add non-array items to the flattened array
            }
        }
    }
    flattenHelper(arr);
    return flattened;
}
const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
const flattenedArray = flattenArray(nestedArray);
console.log("Flattened array:", flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]





------------------------------------------------------------------------

12. Execute a function that finds the index of a specific element in an array, wherein if the element is not found, the function should return to -1

function findIndexOfElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
const numbers = [10, 5, 25, 8, 15];
const targetElement = 25;
const index = findIndexOfElement(numbers, targetElement);
if (index !== -1) {
    console.log("Element", targetElement, "found at index:", index);
} else {
    console.log("Element", targetElement, "not found in the array.");
}

-------------------------------------------------------------------------


================================================================================

String
-------

01. reverse & palindrome or not
02. reverses of words
03. first letter of every word should be in upper case
04. counts each character
05. alphabetical order



------------------------------------------------------------------------------------

01. Write a JavaScript program to reverse the given string & check palindrome or not

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputString = "M Hari Babu";
const newString = reverseString(inputString);
console.log("Reversed string:", newString);  // ubaB iraH M

if (newString === inputString) {
    console.log(inputString, " :is a palindrome.");
} else {
    console.log(inputString, " :is not a palindrome.");
	
}


----------------------------------------------------------------------------------

02.write a program that reverses of words in a sentence


function reverseWords(sentence) {
    const words = sentence.split(" ");
    const reversedWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }
    return reversedWords.join(" ");
}
const inputSentence = "M Hari Babu";
const reversedSentence = reverseWords(inputSentence); // Babu Hari M
console.log("Reversed sentence:", reversedSentence);

------------------------------------------------------------------------------

03. Write a JavaScript function that bifurcates the strings in alphabetical order

function bifurcateStrings(strings) {
    const firstHalf = [];
    const secondHalf = [];
    // Calculate the middle index
    const midIndex = Math.floor(strings.length / 2);
    // Get the reference string for comparison
    const referenceString = strings[midIndex];
    for (const str of strings) {
        if (str.localeCompare(referenceString) <= 0) {
            firstHalf.push(str);
        } else {
            secondHalf.push(str);
        }
    }
    return [firstHalf, secondHalf];
}
const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const bifurcatedStrings = bifurcateStrings(strings);
console.log(bifurcatedStrings);

--------------------------------------------------------------

04. Write a JavaScript program to change the string to title (first letter of every word should be in upper case)



function capitalizeFirstLetterOfEachWord(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
}
const inputString = "hello world this is a sample string";
const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log("Capitalized string:", capitalizedString);
       

------------------------------------------------------------------------

05. Write a function that counts each character in the given string

function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
const inputString = "hello world";
const characterCounts = countCharacterOccurrences(inputString);
console.log("Character counts:", characterCounts);

----------------------------------------------------------------------




