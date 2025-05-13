import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private currentDirection: 'rtl' | 'ltr' = 'ltr';

  constructor() { }

  getDirection(): 'rtl' | 'ltr' {
    return this.currentDirection;
  }

  setDirection(direction: 'rtl' | 'ltr') {
    this.currentDirection = direction;
    document.documentElement.setAttribute('dir', direction);
    document.body.classList.remove('dir-rtl', 'dir-ltr');
    document.body.classList.add(`dir-${direction}`);
  }

  toggleDirection() {
    this.setDirection(this.currentDirection === 'ltr' ? 'rtl' : 'ltr');
  }
}