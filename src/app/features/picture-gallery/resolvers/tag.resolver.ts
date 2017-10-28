import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TAG_RESOURCE } from 'environments/config';
import { ApiService } from 'app/core';
import { ITag } from '../interfaces';

@Injectable()
export class TagResolver {

  constructor(private apiService: ApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITag> {
    return this.apiService.get(TAG_RESOURCE, route.params.id)
      .catch(() => {
        this.router.navigate(['/'], { replaceUrl: true });
        return Observable.of(null);
      });
  }
}
