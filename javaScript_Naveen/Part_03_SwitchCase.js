let browser = 'edge'

switch (browser) {
    case 'chrome':
        console.log('Launch Chrome Browser')
        break
    case 'edge':
        console.log('Launch Edge Browser')
        break
    case 'firefox':
        console.log('Launch Forefox Browser')
        break
    default:
        console.log('Please pass right Browser: ' + browser)
        break
}