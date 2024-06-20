import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./component/home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {PortfoliosComponent} from "./component/portfolios/portfolios.component";
import { WorkExperienceComponent } from './component/work-experience/work-experience.component';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { ImpressumComponent } from './component/impressum/impressum.component';
import { DatenschutzerklarungComponent } from './component/datenschutzerklarung/datenschutzerklarung.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProjectShowcaseComponent } from './component/project-showcase/project-showcase.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfoliosComponent,
    WorkExperienceComponent,
    ProjectCardComponent,
    ImpressumComponent,
    DatenschutzerklarungComponent,
    FooterComponent,
    ProjectShowcaseComponent,
    ContactFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
