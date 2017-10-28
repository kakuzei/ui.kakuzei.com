import { Component, Input } from '@angular/core';

import { ITag } from '../../interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() tags: ITag[];
}