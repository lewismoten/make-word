let lib = require('./lib');

for(let i = 0; i < 10; i++) {
  console.log(`${i + 1}. ${lib(4, 7)}`);
}
