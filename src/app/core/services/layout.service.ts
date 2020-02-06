import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable()
export class LayoutService {
  private id = 0;
  footerVisibility = 'hidden';

  constructor(private readonly router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
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
