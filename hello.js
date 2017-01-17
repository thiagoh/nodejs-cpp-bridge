// hello.js
const addon = require('./build/Release/hello.node');

console.log(addon.hello());
// Prints: 'world'
