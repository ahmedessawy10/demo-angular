import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HOMEComponent } from './components/home/home.component';
import { HEADERComponent } from './components/header/header.component';
import { FOOTERComponent } from './components/footer/footer.component';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HEADERComponent, HOMEComponent, FOOTERComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-project';
}
