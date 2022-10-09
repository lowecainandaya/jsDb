const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const {v4} = require("uuid")
class Data{
   constructor(){
      this.fileName = bcrypt.hashSync(name, salt) + ".json";
      this.id = v4();
      this.date = Date.now() ;
   }
}

module.exports = Data;