import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TAG_RESOURCE } from 'environments/config';
import { ApiService } from 'app/core';
import { ITag } from '../interfaces';

@Injectable()
export class TagService extends ApiService {
  getTags(): Observable<ITag[]> {
    return this.get<ITag[]>(TAG_RESOURCE);
  }

  getTag(id: string): Observable<ITag> {
    return this.get<ITag>(TAG_RESOURCE, id);
  }
}
