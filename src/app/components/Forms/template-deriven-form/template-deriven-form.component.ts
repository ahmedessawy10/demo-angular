import { Component } from '@angular/core';
import { IProducts } from '../../Models/iproducts';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-deriven-form',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-deriven-form.component.html',
  styleUrl: './template-deriven-form.component.css'
})
export class TemplateDerivenFormComponent {
  newPrd: IProducts = {} as IProducts;
  AddPrd() {
    console.log(this.newPrd);
  }
}
