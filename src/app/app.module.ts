import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./component/home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {PortfoliosComponent} from "./component/portfolios/portfolios.component";
import {CreativeDesignComponent} from "./component/creative-design/creative-design.component";
import { WorkExperienceComponent } from './component/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfoliosComponent,
    CreativeDesignComponent,
    WorkExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
