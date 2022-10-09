const fs = require("fs");
const {mObject} =  require("../must");
const Db = require("../Format/db.format.js");
const configs = require("../Db_config.json");

function existed(name){
   return configs.some(data => data.name == name);
}
function deleteDb(name, discriptions){
   if(existed(name)){
      
   // const db = new Db(name);
   // configs.push(db);
   // const formated = `{"name" : "${db.name}", "discriptions" : "${db.discriptions}", "dateCreated" : "${db.date}" }`
   const match = configs.find(data => data.name == name);
   const filtered = configs.filter(config => config.name != match.name);
   const stringify = filtered.map(c => JSON.stringify(c));
   
   const newDb = `[${stringify}]`;
   console.log(newDb);
   fs.rmdir(`../DataBase/${name}`,{recursive : true}, (e) => {
      fs.writeFileSync("../Db_config.json", newDb, "utf8");
      console.log(e);
   })

   } else {
      const date = configs.find(data => data.name == name);
      throw new Error("you are deleting file that doesent exist")
   }
}
// test
// require to createDb that has a name  and delete it 

//* remove most comments to test*//
// delete sample db
deleteDb("sampleDb");

module.exports =  deleteDb;

