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

console.log(table.toString());
