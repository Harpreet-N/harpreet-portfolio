import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {ProjectModel} from "../interface/project.model";
import {ContentfulService} from "../../service/contentful.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: ProjectModel[] = [];
  entries: Entry<any>[] = [];


  constructor(private projectService: ProjectService, private contentfulService: ContentfulService) { }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.contentfulService.getEntries('project') // Replace with your content type ID
        .then(entries => this.entries = entries);
  }

}

