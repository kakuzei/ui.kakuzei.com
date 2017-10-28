import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TAGS_RESOURCE } from 'environments/config';
import { ApiService } from 'app/core';
import { ITag } from '../../interfaces';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  tags$: Observable<ITag[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.tags$ = this.apiService.get<ITag[]>(TAGS_RESOURCE);
  }
}
