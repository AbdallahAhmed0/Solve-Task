import { Component} from '@angular/core';
import { DirectionService } from '../../core/services/direction.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-parent',
  imports: [TranslateModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})


export class ParentComponent {
  currentDirection: 'rtl' | 'ltr' = 'ltr'; // Default direction
  currentLang: 'ar' | 'en' = 'ar'; // Default language


  constructor(public directionService: DirectionService,
              private translate: TranslateService
  ) {}


 toggleDirection() {
        this.currentDirection = this.currentDirection === 'rtl' ? 'ltr' : 'rtl';
        this.currentLang = this.currentDirection === 'rtl' ? 'en' : 'ar';
        this.translate.use(this.currentLang);
    }
    
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}
