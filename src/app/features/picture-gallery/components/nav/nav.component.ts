import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TAG_RESOURCE } from 'environments/config';
import { ApiService } from 'app/core';
import { ITag } from '../../interfaces';

@Component({
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  tags$: Observable<ITag[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.tags$ = this.apiService.get<ITag[]>(TAG_RESOURCE);
  }
}
