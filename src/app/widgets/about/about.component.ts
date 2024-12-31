import { Component, Inject } from '@angular/core';
import { AboutUsContentService } from 'src/app/services/about-us-content.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutUsContent: any;

  constructor(private staticContentService: AboutUsContentService,@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.staticContentService.getAboutUsContent().subscribe((content) => {
      this.aboutUsContent = content.aboutUs;
    });
  }

  goToUrl(){
    this.document.location.href = 'https://www.drsoda.in/assets/brouchures/Dr Soda Brochure.pdf';
  }
}
