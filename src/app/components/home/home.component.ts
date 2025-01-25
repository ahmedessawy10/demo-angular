import { Component } from '@angular/core';
import { StoreData } from '../Models/store-data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HOMEComponent {

  public data: StoreData;
  public current_index: number = 0;
  public current_iamge: string = "";
  public timer: any;


  constructor() {
    this.data = new StoreData("image swaper", [
      "image1.jpeg",
      "image2.jpeg",
      "image3.jpeg",
      "image4.jpeg",
      "image5.jpeg",
      "image6.jpeg",
      "image7.jpeg",
      "",
    ]);
    this.current_iamge = this.data.imgs[0];
  }

  next() {
    if (this.current_index >= this.data.imgs.length - 1) {
      this.current_index = 0
    }
    this.current_iamge = this.data.imgs[this.current_index++];
  }

  // * 0 1 2 3 4 5  6 
  previous() {
    if (this.current_index <= 0) {

      this.current_index = this.data.imgs.length - 2
    } else {
      this.current_index = --this.current_index;

    }
    this.current_iamge = this.data.imgs[this.current_index];

  }

  play() {

    this.timer = setInterval(() => {
      if (this.current_index >= this.data.imgs.length - 1) {
        this.current_index = 0;
      }
      this.current_iamge = this.data.imgs[this.current_index++];
    }, 500);


  }

  stop() {
    clearInterval(this.timer);
  }



}
