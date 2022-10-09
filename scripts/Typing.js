// typing this 
const fileBase =  {name : "string", age : "number"};
const key = {"name" : "low", age : 10}
// const keys = Object.value(key);
const fileBaseKeys = Object.keys(fileBase);
// console.log(Object(key).get("name"));
function validate(config){
   // const result 
   const result = {};
   for (let i = 0; i < fileBaseKeys.length; i++) {
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
}


validate(key)
// console.log(keys."name")
// console.log(Object.;
// console.log(Object.entries(keys));
// console.log(Object);