import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ITag } from '../interfaces';
import { TagService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class TagResolver {
  private readonly tagService = inject(TagService);
  private readonly router = inject(Router);

  resolve(route: ActivatedRouteSnapshot): Observable<ITag> {
    return this.tagService.getTag(route.params['id'] as string).pipe(
      catchError(() => {
        this.router.navigate(['/'], { replaceUrl: true });
        return EMPTY;
      })
    );
  }
}
