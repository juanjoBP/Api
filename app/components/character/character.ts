import "./components/character.ts";
class character extends HTMLElement{
    

}

type CharacterType = {
    img:  .Image;
    name: string;
    state: string;
    genre: string;
    posX: number;
    posY: number;
  }
  
  class Character{
    
    public img:   .Image;
    public name: string;
    public state: string;
    public genre: string;
    public posX: number;
    public posY: number;
    public size: number;
  
    constructor(props:CharacterType){
      this.img = props.img;
      this.name = props.name;
      this.state = props.state;
      this.genre = props.genre;
      this.posX = props.posX;
      this.posY = props.posY;
      this.size = 100;
    }
  
    draw():void{
      image(this.img, this.posX, this.posY, this.size, this.size)
    }
  
    set setPosX(newPos: number){
      this.posX = newPos;
    }
  
    set setPosY(newPos: number){
      this.posY = newPos;
    }
  
    get getPosX(){
      return this.posX
    }
  
    get getPosY(){
      return this.posY
    }
}

customElements.define("my-character", MyCharacter);
export default MyCharacter;