import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ITag } from '../interfaces';
import { TagService } from '../services';

@Injectable()
export class TagResolver {
  constructor(
    private readonly tagService: TagService,
    private readonly router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITag> {
    return this.tagService.getTag(route.params['id'] as string).pipe(
      catchError(() => {
        this.router.navigate(['/'], { replaceUrl: true }); // eslint-disable-line @typescript-eslint/no-floating-promises
        return EMPTY;
      })
    );
  }
}
