import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ITag } from '../../interfaces';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {
  tag$: Observable<ITag>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.tag$ = this.activatedRoute.data.map(data => data.tag);
  }
}
