import { Component } from "@angular/core";

@Component({
    selector:'<carousel></carousel>',
    template:`
    <div id="myCaroucelPpt" class="carousel slide myCaroucel myCarouselL" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img src="assets/imagens/logo.png" alt="" width="500" height="400">
        </div>
        <div class="carousel-item" >
          <img src="assets/imagens/download.jpg" alt="" width="500" height="400">
        </div>
        <div class="carousel-item">
          <img src="assets/imagens/mulher.jpg" alt=""width="500" height="400">
        </div>
      </div>
    </div> 
    `
})
export class CarouselComponent{
    
}