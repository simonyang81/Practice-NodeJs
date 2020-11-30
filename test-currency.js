let currency = require('./libs/currency');

console.log('50 Canadian dollars equals this amount of US dollars: ');
console.log(currency.canadian2US(50));

console.log('30 US dollars equals this amount of Canadian dollars: ');
console.log(currency.US2Canadian(30));