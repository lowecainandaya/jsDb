const fs = require("fs");
const {object} =  require("../must");
const Db = require("../Format/db.format.js");
const configs = require("../Db_config.json");
const {ifTrue} = require("../must")
function existed(name){
   return configs.some(data => data.name == name);
}
function createDb(name, discriptions){
   ifTrue(!discriptions, () => {
      discriptions = null;
   })
   if(!existed(name)){
      
   const db = new Db(name,discriptions);
   configs.push(db);
   // const formated = `{"name" : "${db.name}", "discriptions" : "${db.discriptions}", "dateCreated" : "${db.date}" }`
   const stringify = configs.map(c => JSON.stringify(c));
   
   const newDb = `[${stringify}]`;
   console.log(newDb);
   fs.mkdir(`../DataBase/${name}`, () => {
      fs.writeFileSync("../Db_config.json", newDb, "utf8");
      fs.writeFileSync(`../DataBase/${name}/collection_config.json`, "[]", "utf8");
   })

   } else {
      const date = configs.find(data => data.name == name);
      throw new Error("the database you are making has already existed created on" + " " +date.date)
   }
}
// test 
createDb("sampleDb");
module.exports = createDb;
