import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DirectionService } from '../../core/services/direction.service';
import { LanguageService } from '../../core/services/language.service';
import { InfoItem } from '../../core/models/items-header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [TranslateModule,CommonModule],
})
export class HeaderComponent {
  isOpen = false;
  @Input() items: InfoItem[][] = [];
  @Input() phone: string = '';

  constructor(public directionService: DirectionService,
              public languageService: LanguageService,
              @Inject(DOCUMENT) private document: Document
  ) {
    this.directionService.currentDirection();
  }


  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  closeMenu(): void {
    this.isOpen = false;
  }

    // Closes the menu when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const button = this.document.getElementById('menuButton');
    const menu = this.document.getElementById('dropdownMenu');
    const target = event.target as HTMLElement;

    if (
      !button?.contains(target) &&
      !menu?.contains(target)
    ) {
      this.closeMenu();
    }
  }


}
