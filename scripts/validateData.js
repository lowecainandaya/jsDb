// use to validate data input in model;
function validate(model,config){
   // const result 
   const result = {};
   const fileBaseKeys = model ;
   for (let i = 0; i < fileBaseKeys.length; i++){
      const returnValue = config[fileBaseKeys[i]];
      const type = fileBase[fileBaseKeys[i]];
      if(returnValue == undefined){
         throw new Error(`${fileBaseKeys[i]} must be set `)
      } else if(typeof returnValue != type.toLowerCase()){
         throw new Error(`${fileBaseKeys[i]} is typeof ${type} and you set ${fileBaseKeys[i]}
         to ${typeof returnValue}`)
      } else {
         const objKey = fileBaseKeys[i];
         result[objKey] = returnValue;
      }
     
     
   }
   return result ;
}

module.exports = validate;