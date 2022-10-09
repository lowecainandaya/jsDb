function existed(name){
   return require("../Db_config.json").some(data => data.name == name);
}

module.exports = existed;