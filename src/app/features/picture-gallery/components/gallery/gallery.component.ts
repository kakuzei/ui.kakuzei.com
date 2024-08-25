import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { LayoutService } from 'src/app/core';
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
  private readonly initialVisiblePictureCount: number = 5;
  private readonly visiblePicturesCount: BehaviorSubject<number> = new BehaviorSubject(this.initialVisiblePictureCount);
  private readonly visiblePicturesCount$: Observable<number> = this.visiblePicturesCount.asObservable();
  private subscription: Subscription;
  private readonly extendedPictures: BehaviorSubject<IExtendedPicture[]> = new BehaviorSubject<IExtendedPicture[]>([]);
  extendedPictures$: Observable<IExtendedPicture[]> = this.extendedPictures.asObservable();

  @Input() tag?: ITag;

  constructor(
    private readonly pictureService: PictureService,
    private readonly layoutService: LayoutService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tag']) {
      this.resetView();
      this.subscription = combineLatest([this.getExtendedPictures(), this.visiblePicturesCount$])
        .pipe(
          map(([pictures, count]) => {
            this.pictureCount = pictures.length;
            pictures[0].displayable = true; // mark the first picture as displayable
            return pictures.slice(0, count);
          })
        )
        .subscribe((extendedPictures) => {
          this.extendedPictures.next(extendedPictures);
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDisplayed(picture: IPicture): void {
    this.updateExtendedPicture(picture, (extendedPicture: IExtendedPicture) => {
      extendedPicture.displayed = true;
      return extendedPicture;
    });
    this.updateView();
  }

  onLoaded(picture: IPicture): void {
    this.updateExtendedPicture(picture, (extendedPicture: IExtendedPicture) => {
      extendedPicture.loaded = true;
      return extendedPicture;
    });
    this.updateView();
  }

  private getExtendedPictures(): Observable<IExtendedPicture[]> {
    const pictures$ = this.tag ? this.pictureService.getPicturesByTag(this.tag) : this.pictureService.getPictures();
    return pictures$.pipe(map((pictures) => pictures.map((picture) => this.toExtendedPicture(picture))));
  }

  private toExtendedPicture(picture: IPicture): IExtendedPicture {
    return { displayable: false, displayed: false, loaded: false, picture, visible: false };
  }

  private resetView(): void {
    this.visiblePicturesCount.next(this.initialVisiblePictureCount);
  }

  private updateExtendedPicture(picture: IPicture, updateFunction: (extendedPicture: IExtendedPicture) => IExtendedPicture): void {
    const extendedPictures = this.extendedPictures.getValue();
    const matchingExtendedPicture = extendedPictures.find((extendedPicture) => extendedPicture.picture.id === picture.id);
    if (matchingExtendedPicture) {
      updateFunction(matchingExtendedPicture);
    }
    this.extendedPictures.next(extendedPictures);
  }

  private updateView(): void {
    this.updatePictureVisibility();
    this.updateVisiblePictureCounter();
    this.checkAllVisible();
  }

  private updatePictureVisibility(): void {
    const extendedPictures = this.extendedPictures.getValue();
    let previous: IExtendedPicture | undefined;
    extendedPictures.forEach((extendedPicture) => {
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
    if (extendedPictures.slice(-3).filter((extendedPicture) => !extendedPicture.displayed).length < 3) {
      this.visiblePicturesCount.next(this.visiblePicturesCount.getValue() + 5);
    }
  }

  private checkAllVisible(): void {
    const extendedPictures = this.extendedPictures.getValue();
    if (extendedPictures.filter((extendedPicture) => extendedPicture.visible).length === this.pictureCount) {
      this.layoutService.displayFooter();
    }
  }
}
