import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DirectionService } from '../../core/services/direction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [TranslateModule,CommonModule],
})
export class HeaderComponent {
  isOpen = false;

  constructor(public directionService: DirectionService,
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
