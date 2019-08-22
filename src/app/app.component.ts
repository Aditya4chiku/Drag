import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'draDrop';


  public imageSrc = 'https://image.freepik.com/free-icon/upload-arrow_318-26670.jpg';
  
onDropHandler(object){
   console.log("event "+ JSON.stringify(object));
   this.imageSrc = object.event.target.result;
}
}
