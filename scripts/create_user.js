const { encrypt } = require('./securingData.js');
const users = require("../user_config.json");
const fs = require('fs');
const {  must, mString } = require("../must");
class  User {
   constructor(username, hashedPass){
      this.username = username;
      this.hashedPass = hashedPass;
      if(users.length == 0 && username.toLowerCase() == "admin" || username.toLowerCase() == "root" || username.toLowerCase() == "lead")
         this.permision = 'all';
      }
}
function createUser(usernameAny, pass,secretKey){
   return new Promise((res,rej) => {
   const same = users.some(c => c.username == usernameAny);
   if(same){
   throw new Error(`${usernameAny} is already been recoreded in this database`)
   }
   const username = usernameAny.toLowerCase();
   mString(username,'username must be a typeof string');
   mString(pass, "password must be type of string");
   const hashed = encrypt(pass,secretKey);
   const user = new User(username, hashed);
   users.push(user);
   const jsoned = JSON.stringify(users);
   console.log(jsoned);
   fs.writeFileSync("../user_config.json", `[${jsoned}]`,"utf8")
   })
   
   const error = {
      code : "SERR",
      message : `an error occured while processing your request`
   }
   res(user);
   rej(error)
}

createUser("admin", "1000", "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3");

module.exports = createUser;