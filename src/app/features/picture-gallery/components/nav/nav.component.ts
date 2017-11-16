import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ITag } from '../../interfaces';
import { TagService } from '../../services';

@Component({
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  tags$: Observable<ITag[]>;

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.tags$ = this.tagService.getTags();
  }
}
