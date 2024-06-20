import { Component, Input } from '@angular/core';
import {ProjectModel} from "../interface/project.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
    @Input() project!: ProjectModel;

    constructor(private router: Router) { }

    redirectToProject() {
        this.router.navigate(['/project', this.project.id]);
    }
}



