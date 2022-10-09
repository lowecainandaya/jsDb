const validate = require("./addType");
const format = require('../Format/data.froms.js');
function validateSingle(name,fileBase,config){
   const typeFB = fileBase[name];
   const typeCf = typeof config[name];
   if(typeFB === typeCf){
      return config[name];
   } else {
      throw new Error(`name is typeof ${typeFB} and not ${typeCf}`);
   }
   
}
function validateData(config,fileBase){
   const result = {};
   const fileBaseKeys = Object.keys(fileBase);
   for (let i = 0; i < fileBaseKeys.length; i++) {
      const data = validateSingle(fileBaseKeys[i], fileBase, config);
      result[fileBaseKeys[i]] = data;
      if(!data){
         result[fileBaseKeys[i]] = null;
      } else {
         result[fileBaseKeys[i]] = data;
      }
      console.log(data);
   }
   return result;
}
function model(config){
   validate(config);
   const create = function(path,data,cb)  {
      const cre = require("./createFile");
      if(cb){
         cb();
      }
      validateData(data,config);
      cre(path,data);
   };
   co
   
}

