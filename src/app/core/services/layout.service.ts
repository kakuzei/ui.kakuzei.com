import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class LayoutService {
  private id: number = 0;
  footerVisibility: string = 'hidden';

  constructor(private router: Router) {
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(() => this.hideFooter());
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
