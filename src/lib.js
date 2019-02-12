const readLine = require('readline-sync');
const Table = require('cli-table');
const color = require('colors');

const table = new Table({
    head: ['BMI', 'BMI Category'],
});

let lessThan16 = color.cyan('Less than 16');
let lessThan16Msg = color.cyan('severely underweight');

let bet16to18 = color.cyan('Between 16 and 18.5');
let bet16to18msg = color.cyan('Underweight');

let moderate = color.green('Between 18.5 and 25');
let moderateMsg = color.green('Normal (healthy weight)');

let over = color.red('Between 25 and 30');
let overMsg = color.red('Overweight');

let obese = color.red('more than 30 ');
let obeseMsg = color.red('obese');

table.push([lessThan16, lessThan16Msg],
    [bet16to18, bet16to18msg],
    [moderate, moderateMsg],
    [over, overMsg],
    [obese, obeseMsg] );

const centimeterToMeter = function (CMs) {
    return CMs / 100;
}

const getUser = function () {
    let name = readLine.question("Please enter your name: ");
    let gender = readLine.question("Select your gender(male ,female): ");
    let email = readLine.question("Please enter your email: ");
    let weight = readLine.question("Enter your weight(in KG): ");
    let height = readLine.question("Enter your height(in CMs): ");

    return { name, gender, email, weight, height };
}

const BMICalculator = function (weight, height) {
    return weight / (height * height);
}

const reportGenerator = function (userData) {
    let { weight, height } = userData;
    height = centimeterToMeter(height);
    
    userData['BMI'] = BMICalculator(weight, height).toFixed(2);

    return userData;
}

const main = function () {
    userData = getUser();
    console.clear();
    let BMI = reportGenerator(userData).BMI;
  console.log("Your BMI is:",BMI);
    console.log("Check in which category you are from this table :  ")
    console.log(table.toString()); 
}

main();
