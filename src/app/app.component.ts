import { Component, OnInit } from '@angular/core';
import { ParentComponent } from "./components/parent/parent.component";
import { TranslateService } from '@ngx-translate/core';
declare const AOS: any; // 👈 Tell TypeScript about global AOS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ParentComponent],
})

export class AppComponent implements OnInit {
    constructor(private translate: TranslateService) {
      
    translate.setDefaultLang('ar');
    translate.use('ar');
  }
ngOnInit(): void {
    AOS.init({
      duration: 2000, // Animation duration
      once: false, // Whether animation should happen only once
      easing: 'ease-in-out', // Easing type
      offset: 100, // Offset (in pixels) from the original trigger point
    }); 
  }
  title = 'Solve-Task';
}
