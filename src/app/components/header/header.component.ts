import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [TranslateModule,CommonModule],
})
export class HeaderComponent {
  currentDirection: 'rtl' | 'ltr' = 'ltr'; // Default direction
  currentLang: 'ar' | 'en' = 'ar'; // Default language
  isOpen = false;

  constructor(private translate: TranslateService,
              @Inject(DOCUMENT) private document: Document
  ) {
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

 toggleDirection() {
        this.currentDirection = this.currentDirection === 'rtl' ? 'ltr' : 'rtl';
        this.currentLang = this.currentDirection === 'rtl' ? 'en' : 'ar';
        this.translate.use(this.currentLang);
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
