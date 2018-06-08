import { Component, OnInit, Input,EventEmitter,Output,
 OnChanges} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent //implements OnInit,OnChanges 
{

  @Input('title') childtitle:string="Default Title";
  @Input('items') things:string[]=["thing1","thing2","thing3"];
  style:string="style1";
  item:string;
  @Output('send') emitter:EventEmitter<string>=new EventEmitter<string>();
    constructor() {
       console.log("child created");
        
     }

  /*ngDoCheck(){
    console.log("Executing do Check..."+this.childtitle);
  }*/
 /* ngOnChanges(){
    console.log("Executing on changes-----"+this.childtitle);
  }*/
ngOnInit() {
     console.log("Child Initialized"+this.childtitle);
  }

  changeColor(){
     this.style=this.style=='style1'?'style2':'style1';
  }

  sendToParent(){
      this.emitter.emit(this.item);
  }
}
