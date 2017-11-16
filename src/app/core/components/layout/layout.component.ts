import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LayoutService } from '../../services';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  constructor(public layoutService: LayoutService) {}
}
