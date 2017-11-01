import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { ITag } from '../../interfaces';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {
  tag$: Observable<ITag>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.tag$ = this.activatedRoute.data.pluck('tag');
  }
}
