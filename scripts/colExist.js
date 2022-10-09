const doesExist = require("./dirExist");
// const existed = require("./colExist")
const {must,defined} = require("../must.js");
function colExist(config){
   must(doesExist(config.parent), 'there is no database named ' + config.parent);
   const linkToConfig = `../DataBase/${config.parent}/collection_config.json`;
   const Config = require(linkToConfig);
   const condition = Config.some(data => data.name == config.name)
      console.log(condition);
      return condition;

   

}

module.exports = colExist ;
// test
colExist({name: "200",parent : "200"})