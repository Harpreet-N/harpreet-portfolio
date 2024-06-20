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
      year: '2024',
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
      title: 'Diabetes Digital Vernetzt',
      description: 'This is a dedicated website for people with diabetes, designed to provide support and information to help manage their condition. Members can share valuable insights, resources, and experiences. The site also features a forum where users can communicate with each other, ask questions, and offer mutual support in a welcoming community.',
      industry: 'Medical',
      year: '2024',
      url: 'https://www.figma.com/proto/2XFfuoXI8l5erU6zxyBkuH/MKL_Diabetes?node-id=129-5252&starting-point-node-id=129%3A5252',
      images: [
        'assets/img/diabetes_verein/verein_1.png',
        'assets/img/diabetes_verein/verein_2.png',
        'assets/img/diabetes_verein/tonal_palettes.png',
      ]
    },
    {
      id: 3,
      title: 'GutGestalten Article Project',
      description: 'The GutGestalten Article Project is a collaborative initiative carried out in cooperation with FH St. Pölten. This project aims to explore innovative design concepts and foster academic and practical knowledge exchange.',
      industry: 'Study Project',
      year: '2023 - 2024',
      url: 'https://gutgestalten.at/identitaetskrise.html',
      images: [
        'assets/img/gutgestalten/gutgestalten_1.png',
        'assets/img/gutgestalten/gutgestalten_2.png',
        'assets/img/gutgestalten/gutgestalten_3.png',
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
