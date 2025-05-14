import { Component } from '@angular/core';
import { DirectionService } from '../../core/services/direction.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public directionService: DirectionService,
  ) {
    this.directionService.currentDirection();
  }
}
