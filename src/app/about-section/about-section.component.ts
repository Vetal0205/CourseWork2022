import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  

  constructor() {
    
  }

  ngOnInit(): void {
    function onEntry(entry: any[]) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.add('element-show');
        }
      });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.about__container');
    for (let elm of elements) {
      observer.observe(elm);
    }
  }

}
