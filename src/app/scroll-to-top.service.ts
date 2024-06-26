// scroll-to-top.service.ts

import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {

  constructor(private router: Router) { }

  // Método para scroll hacia arriba al cambiar de ruta
  scroll(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }
}
