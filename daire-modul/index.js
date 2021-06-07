const {circleArea, circleCircumference} = require('./circle');

const r = 5;

const alan = circleArea(r);
const cevre = circleCircumference(r);

console.log(`Yaricapi ${r} olan dairenin alani : ${alan}, cevresi : ${cevre}`);