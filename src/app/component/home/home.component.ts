import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {ProjectModel} from "../interface/project.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: ProjectModel[] = [];

  constructor(private projectService: ProjectService) { }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}

