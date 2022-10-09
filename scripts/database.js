const databases = require(`../Db_config.json`);
const dirExist = require(`dirExist`);
const {must} = require('../must');
const createCollection = require('./createCollection');
const deleteCollection = require(`./deleteCollection`);

function getDb(name){
   must(dirExist(name), `there is no database named ${name}`);
   return databases[name];
}
class Collections{
   constructor(name){
      const config = require(`../DataBase/${this.name}/collection_config.json`);
      const _create = function(colName){
         return new Promise((res,rej) => {
            try {
               const col = createCollection(colName);
               res(col)
               
            } catch (e) {
               rej(e)
            }
         })
      }
      const _delete = function(colName){
         return new Promise((res,rej) => {
            try {
               const col = deleteCollection(colName);
               res(col)
               
            } catch (e) {
               rej(`theres an error occured while deleting a collection`)
         }
      });
   }
   
   }
}
class Database {
   constructor(name){
       const config = getDb(this.name);
         const collections =  require(`../DataBase/${this.name}/collection_config.json`);
   }
}