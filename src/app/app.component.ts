import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HOMEComponent } from './components/home/home.component';
import { HEADERComponent } from './components/header/header.component';
import { FOOTERComponent } from './components/footer/footer.component';
// import { ParentComponent } from './components/parent/parent.component';
// import { ORDERComponent } from './components/order/order.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HEADERComponent, FOOTERComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'demo-project';
  isErrorRoute = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isErrorRoute = event.url.includes('error') || event.url === '/404';
        console.log('isErrorRoute:', this.isErrorRoute);
      }
    });
  }

  ngOnInit(): void {
  }

  onActivate(event: any) {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }

}


