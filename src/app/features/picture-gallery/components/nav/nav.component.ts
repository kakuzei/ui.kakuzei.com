import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { ITag } from '../../interfaces';
import { TagService } from '../../services';

@Component({
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [
    AsyncPipe,
    RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  private readonly tagService = inject(TagService);

  tags$: Observable<ITag[]>;

  ngOnInit(): void {
    this.tags$ = this.tagService.getTags();
  }

  trackById(_index: number, tag: ITag): string {
    return tag.id;
  }
}
