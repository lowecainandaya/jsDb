const exist = require("./colExist");
const fs = require("fs");
const DataFormat = require("../Format/data.forms.js");
function create(path, filedata){
   const dataConfig = require(`${path}/data_config.json`);
   const fileName = `data_${dataConfig.length}`
   dataConfig.push(fileName);
   filedata.name = fileName;
   let ifEmty ;
   if(dataConfig.length < 1){
      ifEmty = "[]";
   } else {
      ifEmty = `${JSON.stringify(filedata)};`
   }
   fs.writeFileSync(`path/${fileName}`,ifEmty,"utf8");
   fs.writeFileSync(`${path}/data_config.json`, )
}

module.exports = create;