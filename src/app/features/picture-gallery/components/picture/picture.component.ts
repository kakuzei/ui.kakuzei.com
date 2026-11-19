import {
  AfterViewInit,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  signal,
  SimpleChanges
} from '@angular/core';
import inView from 'in-view';

import { LayoutService } from '../../../../core';
import { IPicture } from '../../interfaces';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss'
})
export class PictureComponent implements AfterViewInit, OnChanges, OnInit {
  private readonly layoutService = inject(LayoutService);

  domId: string;

  pictureVisibilityState = signal<'hidden' | 'shown'>('hidden');
  imageVisibilityState = signal<'hidden' | 'shown'>('hidden');

  @Input() picture: IPicture;

  @Input() visible: boolean;

  @Output() readonly displayed: EventEmitter<IPicture> = new EventEmitter<IPicture>();

  @Output() readonly loaded: EventEmitter<IPicture> = new EventEmitter<IPicture>();

  ngOnInit(): void {
    this.domId = this.layoutService.domId();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && this.visible) {
      this.pictureVisibilityState.set('shown');
      this.imageVisibilityState.set('shown');
    }
  }

  ngAfterViewInit(): void {
    inView(`#${this.domId}`).once('enter', () => {
      this.displayed.emit(this.picture);
      this.displayed.complete();
    });
  }

  onLoad(): void {
    this.loaded.emit(this.picture);
  }
}
