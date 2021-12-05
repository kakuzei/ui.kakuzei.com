import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import * as inView from 'in-view';

import { LayoutService } from 'src/app/core';
import { IPicture } from '../../interfaces';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  animations: [
    trigger('pictureVisibilityChanged', [state('hidden', style({ display: 'none' })), state('shown', style({ display: 'block' }))]),
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
  visibility = 'hidden';

  @Input() picture: IPicture;

  @Input() visible: boolean;

  @Output() readonly displayed: EventEmitter<IPicture> = new EventEmitter<IPicture>();

  @Output() readonly loaded: EventEmitter<IPicture> = new EventEmitter<IPicture>();

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    this.domId = this.layoutService.domId();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && this.visible) {
      this.visibility = 'shown';
    }
  }

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    inView(`#${this.domId}`).once('enter', () => {
      this.displayed.emit(this.picture);
      this.displayed.complete();
    });
  }

  onLoad(): void {
    this.loaded.emit(this.picture);
  }
}
