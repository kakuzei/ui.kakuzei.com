import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';

import { LayoutService } from 'app/core';
import { IExtendedPicture, IPicture, ITag } from '../../interfaces';
import { PictureService } from '../../services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnChanges, OnDestroy {
  private pictureCount: number;
  private initialVisiblePictureCount = 5;
  private visiblePicturesCount: BehaviorSubject<number> = new BehaviorSubject(this.initialVisiblePictureCount);
  private visiblePicturesCount$ = this.visiblePicturesCount.asObservable();
  private subscription: Subscription;
  private extendedPictures: BehaviorSubject<IExtendedPicture[]> = new BehaviorSubject([]);
  extendedPictures$ = this.extendedPictures.asObservable();

  @Input()
  tag: ITag;

  constructor(private pictureService: PictureService, private layoutService: LayoutService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tag) {
      this.resetView();
      this.subscription = Observable.combineLatest(this.getExtendedPictures(), this.visiblePicturesCount$, (pictures, count) => {
        this.pictureCount = pictures.length;
        pictures[0].displayable = true; // mark the first picture as displayable
        return pictures.slice(0, count);
      }).subscribe(extendedPictures => this.extendedPictures.next(extendedPictures));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDisplayed(picture: IPicture): void {
    this.markPictureAs('displayed', picture);
    this.updateView();
  }

  onLoaded(picture: IPicture): void {
    this.markPictureAs('loaded', picture);
    this.updateView();
  }

  private getExtendedPictures(): Observable<IExtendedPicture[]> {
    const pictures$ = this.tag ? this.pictureService.getPicturesByTag(this.tag) : this.pictureService.getPictures();
    return pictures$.map(pictures => pictures.map(picture => this.toExtendedPicture(picture)));
  }

  private toExtendedPicture(picture: IPicture): IExtendedPicture {
    return { displayable: false, displayed: false, loaded: false, picture, visible: false };
  }

  private resetView(): void {
    this.visiblePicturesCount.next(this.initialVisiblePictureCount);
    this.layoutService.hideFooter();
  }

  private markPictureAs(property: string, picture: IPicture): void {
    const extendedPictures = this.extendedPictures.getValue();
    const matchingExtendedPicture = extendedPictures.find(extendedPicture => extendedPicture.picture.id === picture.id);
    if (matchingExtendedPicture) { matchingExtendedPicture[property] = true; }
    this.extendedPictures.next(extendedPictures);
  }

  private updateView(): void {
    this.updatePictureVisibility();
    this.updateVisiblePictureCounter();
    this.checkAllVisible();
  }

  private updatePictureVisibility(): void {
    const extendedPictures = this.extendedPictures.getValue();
    let previous: IExtendedPicture | null = null;
    extendedPictures.forEach(extendedPicture => {
      if (previous && previous.visible) {
        extendedPicture.displayable = true; // mark the picture as displayable when the previous one is visible
      }
      if (extendedPicture.displayable && extendedPicture.loaded) {
        extendedPicture.visible = true; // mark the picture as visible when the picture is displayable and loaded
      }
      previous = extendedPicture;
    });
    this.extendedPictures.next(extendedPictures);
  }

  private updateVisiblePictureCounter(): void {
    const extendedPictures = this.extendedPictures.getValue();
    if (extendedPictures.slice(-3).filter(extendedPicture => !extendedPicture.displayed).length < 3) {
      this.visiblePicturesCount.next(this.visiblePicturesCount.getValue() + 5);
    }
  }

  private checkAllVisible(): void {
    const extendedPictures = this.extendedPictures.getValue();
    if (extendedPictures.filter(extendedPicture => extendedPicture.visible).length === this.pictureCount) {
      this.layoutService.displayFooter();
    }
  }
}
