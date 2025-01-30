
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOMEComponent } from './components/home/home.component';
// import { ORDERComponent } from './components/order/order.component';
import { MasterorderComponent } from './components/masterorder/masterorder.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // {path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HOMEComponent)},
    { path: 'home', component: HOMEComponent },
    { path: 'order', component: MasterorderComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'error', pathMatch: 'full' },
    { path: 'error', component: ErrorComponent },


];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }