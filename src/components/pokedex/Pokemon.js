class Pokemon {
    constructor(data) {
      this.id = data.id;
      this.height = data.height;
      this.weight = data.weight;
      this.name = data.name;
      // front view image of pokemon
      this.sprite = data.sprites.front_default;
      this.type = data.types[0].type.name;  
      this.move = data.moves[0].move.name  
    }

    log() {
      console.log([
        this.id,
        this.name,
        this.height,
        this.weight,
        this.sprite,
        this.type,
        this.move
      ])
    }
  }
  
  export default Pokemon;