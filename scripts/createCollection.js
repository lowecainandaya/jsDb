const format = require("../Format/collections.form.js");
const {must,mDefined,mString} = require("../must");
const deleteCollection = require('./deleteCollection');
function existed(name){
   return require("../Db_config.json").some(data => data.name == name);
}

const colExist = require("./colExist");
const fs = require("fs");
function createCollection(config){
   must(!colExist(config), `the collecion named ${config.name} in ${config.parent} already existed`)
   mString(config.name,"name must be typeof string");
   mString(config.parent,"parent must be typeof string");
   
   if(!config.discription){
      config.discription = null;
   }
   const linkToConfig = `../DataBase/${config.parent}/collection_config.json`;
   const Config = require(linkToConfig);
   const thisCollection = new format(config.name,config.parent, config.discription);
   Config.push(thisCollection);
   console.log(Config);
   const stringify = Config.map(data => JSON.stringify(data));
   const writableDb = `[${stringify}]`;
   const linkToFileBase = config.fileBase;
   fs.mkdir(`../DataBase/${config.parent}/${config.name}`, () => {
      fs.writeFileSync(linkToConfig, writableDb,"utf8");
      fs.writeFileSync(`../DataBase/${config.parent}/${config.name}/`, "[]","utf8");

   })
   return thisCollection;
}


createCollection({name : "collection", parent : "sampleDb", fileBase : {name : "string"}});
