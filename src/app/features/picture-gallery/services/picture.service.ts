import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/core';
import { PICTURE_RESOURCE, TAG_RESOURCE } from 'src/environments/config';
import { IPicture, ITag } from '../interfaces';

@Injectable()
export class PictureService extends ApiService {
  getPictures(): Observable<IPicture[]> {
    return this.get<IPicture[]>(PICTURE_RESOURCE);
  }

  getPicturesByTag(tag: ITag): Observable<IPicture[]> {
    return this.get<IPicture[]>(TAG_RESOURCE, tag.id, PICTURE_RESOURCE);
  }
}
