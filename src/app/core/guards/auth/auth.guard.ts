import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    let token = localStorage.getItem('token');
    console.log(token);
    if (token == null) {
      console.log("No hay token");
      this.router.navigate(['/dashboards']);
      return false;
    }

    return true;
  }
}
