import { Injectable } from '@angular/core';
import {ProjectModel} from "../component/interface/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: ProjectModel[] = [
    {
      id: 1,
      title: 'Diabetes',
      description: 'A diabetes mobile app designed for kids to learn about diabetes in a playful and engaging way. Through interactive games and activities, children can gain a better understanding of diabetes management and healthy habits in a fun and educational environment.',
      industry: 'Medical',
      year: '2023',
      images: [
        'assets/img/diabetes/diabetes_app_bild.png',
        'assets/img/diabetes/diabetes_app_bild_1.png',
        'assets/img/diabetes/diabetes_app_bild_2.png',
        'assets/img/diabetes/diabetes_app_bild_3.png',
        'assets/img/diabetes/diabetes_app_bild_4.png',
        'assets/img/diabetes/diabetes_app_bild_4.png',
        'assets/img/diabetes/icon_palette.png',
        'assets/img/diabetes/color_palette.png',
      ]
    },
    {
      id: 2,
      title: 'ProjectModel Two',
      description: 'Description for project two.',
      industry: 'Food & Beverage',
      year: '2023',
      url: 'https://example.com/project-two',
      images: [
        'assets/project2-1.jpg',
        'assets/project2-2.jpg'
      ]
    },
    {
      id: 3,
      title: 'ProjectModel One',
      description: 'Description for project one.',
      industry: 'Food & Beverage',
      year: '2023',
      url: 'https://example.com/project-one',
      images: [
        'assets/project1-1.jpg',
        'assets/project1-2.jpg'
      ]
    },
    // Add more projects as needed
  ];

  getProjects(): ProjectModel[] {
    return this.projects;
  }

  getProjectById(id: number): ProjectModel {
    return <ProjectModel>this.projects.find(project => project.id === id);
  }
}
