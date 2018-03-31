import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { TagService } from '../services';
import { ITag } from '../interfaces';

@Injectable()
export class TagResolver {
  constructor(private tagService: TagService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITag | null> {
    return this.tagService.getTag(route.params.id)
      .catch(() => {
        this.router.navigate(['/'], { replaceUrl: true });
        return Observable.of(null);
      });
  }
}
