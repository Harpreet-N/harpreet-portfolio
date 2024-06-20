import {Component, OnInit} from '@angular/core';
import {ProjectModel} from "../interface/project.model";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {

  projects: ProjectModel[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
