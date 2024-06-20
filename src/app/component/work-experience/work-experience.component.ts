import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateOnScroll();
  }

  animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          const circle = entry.target.querySelector('.circle');
          if (circle) {
            circle.classList.add('highlight-circle');
          }
        } else {
          entry.target.classList.remove('show');
          const circle = entry.target.querySelector('.circle');
          if (circle) {
            circle.classList.remove('highlight-circle');
          }
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.timeline-item, .work-experience-container h2, .timeline');
    hiddenElements.forEach(el => observer.observe(el));
  }
}
