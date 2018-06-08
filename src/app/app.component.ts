import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Angular  5 App -CGI Chennai';
  childtitles:string[]=["Vegetables","Fruits","Spices","Stationaries"];
  items:string[][]=[
    ["Onion","Potato","Tomato","Brinjal","Chilli"],
    ["Apple","Banana","Cherry","Grapes","Mango"],
    ["Cardamom","Cinnamon","Cloves","Pepper"],
    ["Pen","Paper","Book","Sharpener"]
  ]
  constructor(){
      console.log("parent created");
  }
  ngOnInit(){
      console.log("Parent initialized");
  }
  ngAfterContentInit(){
     console.log("Parent Template ready (Content)");
  }

  ngAfterViewInit(){
     console.log("Child Template ready(View)");
  }

  handleChildData(data,childcount){
     this.items[childcount].push(data);
     this.childtitles[childcount]=data;
  }

}
