import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITag } from '../../interfaces';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  imports: [CommonModule, GalleryComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);

  tag$: Observable<ITag>;

  ngOnInit(): void {
    this.tag$ = this.activatedRoute.data.pipe(map((data) => data['tag'] as ITag));
  }
}
