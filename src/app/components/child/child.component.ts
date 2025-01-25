import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public message: string = "";
  @Output() messageEvent = new EventEmitter<string>();

  public msg: string = "hello from chhild";

  constructor() { }


  messageToParent() {
    this.messageEvent.emit("message from child");
  }
}
