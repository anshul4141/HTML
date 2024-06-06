// let age = 23;

// if (age == 23) {

//     console.log('age is 23');
//     document.write('<h1>age is 23</h1>');

// } else {

//     console.log('age is unknown');

// }

// let loginId = 'dfdf';
// let password = 'dfdf';

// if (loginId == null && password == null) {

//     document.write('<h1 style="color:red">Login Id is required</h1>');
//     document.write('<h1 style="color:red">Password is required</h1>');

// } else if (loginId == 'abc@gmail.com' && password == null) {

//     document.write('<h1 style="color:red" >Password is required</h1>');

// } else if (loginId == null && password == '1234') {

//     document.write('<h1 style="color:red">Login Id is required</h1>');

// } else if (loginId == 'abc@gmail.com' && password == '1234') {

//     document.write('<h1 style="color:green">Login successfully</h1>');

// } else {

//     document.write('<h1 style="color:red">Invalid login Id or password</h1>');

// }

let month = 'Jun'

switch (month) {
    case 'jan':
        document.write('this is jan');
        break;
    case 'feb':
        document.write('this is feb');
        break;
    case 'march':
        document.write('this is march');
        break;
    case 'april':
        document.write('this is april');
        break;
    case 'may':
        document.write('this is may');
        break;
    case 'Jun':
        document.write('this is Jun');
        break;
    default:
        document.write('month is not available');
        break;
}