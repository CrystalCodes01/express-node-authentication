const bcrypt = require("bcrypt");
const salt1 = bcrypt.genSaltSync(10);
const salt2 = bcrypt.genSaltSync(10);


const encryptedPass1 = bcrypt.hashSync("swordfish", salt1);
const encryptedPass2 = bcrypt.hashSync("olleh", salt2);

console.log("swordfish -> " + encryptedPass1);
console.log("olleh -> " + encryptedPass2);

console.log('    salt:  ' + salt1);
console.log('    salt:  ' + salt2);
