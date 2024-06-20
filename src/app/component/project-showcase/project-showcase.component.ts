import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../service/project.service";
import {ProjectModel} from "../interface/project.model";

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.scss']
})
export class ProjectShowcaseComponent implements OnInit {
  @Input() project!: ProjectModel;
  @Input() layout: 'left' | 'right' = 'left'; // Default layout is left


  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProjectById(+projectId!);
  }
}
