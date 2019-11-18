// Write your classes here
class Tree{
  constructor(species){
    this.species = species;
  }
  
  static definition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
  }
}


class Deciduous{
  constructor(name){
    super(definition())
    this.name = name
  }
  static definition(){
    return super.definition();
  }
}