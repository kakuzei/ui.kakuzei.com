import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutService } from '../../services';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  public layoutService = inject(LayoutService);
}
