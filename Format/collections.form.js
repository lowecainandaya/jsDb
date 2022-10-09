class   CollectionForms {
   constructor(name, parentDb, discriptions){
      this.name = name ;
      this.parentDb = parentDb;
      this.discriptions = discriptions;
      this.date = new Date();
   }
}

module.exports = CollectionForms;