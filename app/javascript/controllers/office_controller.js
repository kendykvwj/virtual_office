import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.playerX = 100;
    this.playerY = 300;
    this.drawPlayer();
  }
  drawPlayer() {
    const context = this.element.getContext('2d');
    context.fillStyle = '#2563eb';
    context.fillRect(this.playerX, this.playerY , 50, 50);
  }

  //capturo as setinhas e faco ele se mover diminuindo os pixel de x e y
  move(event){
    if(event.key === "ArrowRight" ){
     const nextX = this.playerX + 20
     const maxX = this.element.width - 50
     if ( nextX > maxX){
      this.playerX = maxX
     } 
     else {
      this.playerX = nextX
     }
     }
    else if(event.key === "ArrowLeft"){
      const nextXLeft = this.playerX - 20
      if (nextXLeft > 0) {
        this.playerX = nextXLeft
      }
      else {
        this.playerX = 0
      }
    }
    else if(event.key === "ArrowUp"){
      const nextUp = this.playerY - 20
      if (nextUp > 0){
        this.playerY = nextUp
      }
      else {
          this.playerY = 0
      }
    }
    else if(event.key === "ArrowDown"){
      const nextDown = this.playerY + 20
      const MaxY = this.element.height - 50
      if (nextDown > MaxY){
        this.playerY = MaxY
      }
      else {
        this.playerY = nextDown
      }
    }
    const context = this.element.getContext("2d")
    context.clearRect(0,0,this.element.width,this.element.height)
    this.drawPlayer()
    
  }
}
