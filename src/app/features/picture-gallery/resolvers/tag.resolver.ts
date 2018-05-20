import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TagService } from '../services';
import { ITag } from '../interfaces';

@Injectable()
export class TagResolver {
  constructor(private tagService: TagService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITag> {
    return this.tagService.getTag(route.params.id)
      .pipe(
        catchError(() => {
          this.router.navigate(['/'], { replaceUrl: true });
          return empty();
        })
      );
  }
}
