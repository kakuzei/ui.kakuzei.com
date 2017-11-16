import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {
  private id = 0;

  footerVisibility = 'hidden';

  hideFooter(): void {
    this.footerVisibility = 'hidden';
  }

  displayFooter(): void {
    this.footerVisibility = 'shown';
  }

  domId(): string {
    return `id_${++this.id}`;
  }
}
