// delete file 
const fs = require("fs");
function deletefile(path,data,value){
   var fileData;
   const file = require(path);
   if(value && typeof data === 'string'){
   fileData = file.find(dta => dta[data] === value);
   } else if(typeof data === 'object'){
      fileData  = file.find(dta => dta === data);
   }
}