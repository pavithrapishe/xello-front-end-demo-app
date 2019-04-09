import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo-component/demo-component.component';
import { PageNotFoundComponent } from './demo/page-not-found/page-not-found.component';
import { TooltipDirective } from './demo/tooltip.directive';
import { ImplDetailsComponent } from './demo/impl-details/impl-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PageNotFoundComponent,
    TooltipDirective,
    ImplDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
