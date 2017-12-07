import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as inView from 'in-view';

import { LayoutService } from 'app/core';
import { IPicture } from '../../interfaces';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  animations: [
    trigger('pictureVisibilityChanged', [
      state('hidden', style({ display: 'none' })),
      state('shown', style({ display: 'block' }))
    ]),
    trigger('imageVisibilityChanged', [
      state('hidden', style({ opacity: 0 })),
      state('shown', style({ opacity: 1 })),
      transition('hidden => shown', animate('0.5s ease-in'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent implements AfterViewInit, OnChanges, OnInit {
  domId: string;
  visibility: string = 'hidden';

  @Input()
  picture: IPicture;

  @Input()
  visible: boolean;

  @Output()
  displayed: EventEmitter<IPicture> = new EventEmitter();

  @Output()
  loaded: EventEmitter<IPicture> = new EventEmitter();

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.domId = this.layoutService.domId();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.visible && this.visible) {
      this.visibility = 'shown';
    }
  }

  ngAfterViewInit(): void {
    inView(`#${this.domId}`).on('enter', () => {
      this.displayed.emit(this.picture);
      this.displayed.complete();
    });
  }

  onLoad(): void {
    this.loaded.emit(this.picture);
  }
}
