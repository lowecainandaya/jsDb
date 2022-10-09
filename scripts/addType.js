function validate(config){
   const keys = Object.keys(config);
   for (let i = 0; i < keys.length; i++) {
      if(config[keys[i]] == "string" || config[keys[i]] == "number" || config[keys[i]] == "object" ||
       config[keys[i]] == "boolean"){
         return true;
      } else {
         throw new Error(`${keys[i]} property must be a valid jsDb types but instead it is set as "${config[keys[i]]}"  `)
      }
   }
}

// validate(fileBase);

module.exports = validate ;
