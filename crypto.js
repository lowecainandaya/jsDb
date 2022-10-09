// const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("10", salt);
// const res = bcrypt.compareSync("salt", salt);

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const pass = "meee"
var hash = bcrypt.hashSync(pass, salt);
// Store hash in your password D
const res = bcrypt.compareSync(pass, hash); 
console.log(res);