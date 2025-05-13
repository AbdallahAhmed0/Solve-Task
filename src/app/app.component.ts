import { Component } from '@angular/core';
import { ParentComponent } from "./components/parent/parent.component";
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ParentComponent,HeaderComponent],
})

export class AppComponent {
    constructor(private translate: TranslateService) {
    translate.setDefaultLang('ar');
    translate.use('ar');
  }

  title = 'Solve-Task';
}
