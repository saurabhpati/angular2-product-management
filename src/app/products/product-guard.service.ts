import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGuardService implements CanActivate {

  public constructor(private _router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let id = route.params['id'];
    let canActivate = !(isNaN(id) || id < 0);

    if (!canActivate) {
      alert('Invalid URL.');
      this._router.navigate(['/products']);
    }

    return canActivate;
  }
}
