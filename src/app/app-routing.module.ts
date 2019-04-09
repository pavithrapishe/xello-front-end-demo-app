import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo-component/demo-component.component';
import { PageNotFoundComponent } from './demo/page-not-found/page-not-found.component';
import { ImplDetailsComponent } from './demo/impl-details/impl-details.component';

const routes: Routes = [
  {
    path: 'implDetails',
    component: ImplDetailsComponent
  },
  {
    path: 'tooltipDemo',
    component: DemoComponent
  },
  {
    path: 'routeDemo1',
    component: PageNotFoundComponent
  },
  {
    path: 'routeDemo2',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/implDetails',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
