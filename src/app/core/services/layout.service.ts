import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private id = 0;
  footerVisibility = 'hidden';
  private readonly router = inject(Router);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideFooter();
    });
  }

  domId(): string {
    return `id_${++this.id}`;
  }

  displayFooter(): void {
    this.footerVisibility = 'shown';
  }

  private hideFooter(): void {
    this.footerVisibility = 'hidden';
  }
}
