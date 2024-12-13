function checkAge(age) {

    if (age >= 18) {
        console.log('Eligible for Vote')
    }
    else {
        console.log('Sorry no Eligible for Vote')
    }
}
checkAge(18)
checkAge(11)
checkAge(38)

console.log('==============================')

function checkNumber(number) {

    if (number > 0) {
        console.log('Number is +ve')
    }
    else if (number < 0) {
        console.log('Number is -Ve')
    }
    else {
        console.log('Number is 0')
    }
}
checkNumber(0)
checkNumber(-2)
checkNumber(6)

console.log('==============================')

function checkGrade(score) {    //Nested if-else

    let grade;

    if (score >= 90) {
        grade = 'A'
    }
    else {
        if (score >= 80) {
            grade = 'B'
        }
        else {
            if (score >= 70) {
                grade = 'C'
            }
            else {
                if (score >= 60) {
                    grade = 'D'
                }
                else {
                    if (score <= 59) {
                        grade = 'FAIL'
                    }
                }
            }
        }
    }
    console.log(grade)
}

checkGrade(95)
checkGrade(55)
checkGrade(75)

console.log('==============================')

let browser = 'chrome'

if (browser == 'chrome') {
    console.log('Launch Chrome Browser')
}
else if (browser == 'edge') {
    console.log('Launch Edge Browser')
}
else if (browser == 'firefox') {
    console.log('Launch Firefox Browser')
}
else {
    console.log('Please Pass right Browser: ' + browser)
}