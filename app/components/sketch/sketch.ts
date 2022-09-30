import "./components/sketch.ts";
class Sketch extends HTMLElement{

let sketch:Sketch[] = [];

function preload(){
  
}

function setup() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(raw => raw.json())
    .then(data => {
      console.log(data.results)
      const newInfo:Sketch[] = data.results.map((char:any) => {
        const info: Sketch = {
          img: loadImage(char.image),
          name: char.name,
          state: char.status,
          genre: char.gender,
          posX: 0,
          posY: 0,
        };
        return new Sketch (info)
      })
      sketch = newInfo;
      console.log(newInfo)
    })
  
  createCanvas(windowWidth, windowHeight)

}

function draw() {
  background(255);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      const currentValue = sketch[j + (i*5)];
      if(currentValue){
        currentValue.setPosX = i*(currentValue.size + 10) + 200;
        currentValue.setPosY = j*(currentValue.size + 10) + 50;
        currentValue.draw()
        sketch[0]
      }
    }
    
  }

}

customElements.define("my-sketch", MySketch);
export default MySketch;