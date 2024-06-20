import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DatenschutzerklarungComponent} from "./component/datenschutzerklarung/datenschutzerklarung.component";
import {ImpressumComponent} from "./component/impressum/impressum.component";
import {ProjectShowcaseComponent} from "./component/project-showcase/project-showcase.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project/:id', component: ProjectShowcaseComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutzerklarung', component: DatenschutzerklarungComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // This option will scroll to top on route change
  })],  exports: [RouterModule]
})
export class AppRoutingModule { }
