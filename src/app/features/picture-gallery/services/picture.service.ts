import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../../core';
import { PICTURE_RESOURCE, TAG_RESOURCE } from '../../../../environments/config';
import { IPicture, ITag } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PictureService extends ApiService {
  getPictures(): Observable<IPicture[]> {
    return this.get<IPicture[]>(PICTURE_RESOURCE);
  }

  getPicturesByTag(tag: ITag): Observable<IPicture[]> {
    return this.get<IPicture[]>(TAG_RESOURCE, tag.id, PICTURE_RESOURCE);
  }
}
