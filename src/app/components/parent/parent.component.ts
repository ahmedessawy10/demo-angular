import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component"; //import child component 
@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  // styles: ["p{color:red}"]

})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child: any;

  public textview: boolean = false;

  showtext() {
    this.textview = !this.textview;
    console.log(this.textview);
  }
  constructor() {

  }


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    alert(this.child.msg);
  }
  receiveMessage($event: any) {
    alert($event)
  }
}
