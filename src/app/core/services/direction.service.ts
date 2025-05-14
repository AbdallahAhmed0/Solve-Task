import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
   currentDirection = signal<'rtl' | 'ltr'>('rtl');

  constructor() {
    this.setDirection(this.currentDirection());
   }


  setDirection(direction: 'rtl' | 'ltr') {
    this.currentDirection.set(direction);
    document.documentElement.setAttribute('dir', direction);
    document.body.classList.remove('dir-rtl', 'dir-ltr');
    document.body.classList.add(`dir-${direction}`);
  }

  toggleDirection() {
    this.setDirection(this.currentDirection() === 'ltr' ? 'rtl' : 'ltr');
  }
}