const {must,mDefined,mString} = require("../must");
const doesExist = require("./colExist");
const fs =require("fs");

function deleteCollection(config){
   const linkToConfig = `../DataBase/${config.parent}/collection_config.json`
   const Config = require(linkToConfig);
   must(doesExist(config), `there is no collection named ${config.name} in ${config.parent} database`)
   const match = Config.find(data => data.name == config.name);
   const filtered = Config.filter(data => data.name != match.name);
   const stringify = filtered.map(c => JSON.stringify(c));
   const newConfig = `[${stringify}]`;
   console.log(newConfig);
   fs.rm(`../DataBase/${config.parent}/${config.name}`, {recursive : true}, () => {
      fs.writeFileSync(linkToConfig,newConfig,"utf8")
   })
   const deleted = {done : true, msg: `${config.name} collection at ${config.parent}`}
   return deleted
}

// deleteCollection({name : "200",parent : "200"});
// deleteCollection({name : "collection", parent : "sampleDb", fileBase : {name : "string"}});
module.exports = deleteCollection;