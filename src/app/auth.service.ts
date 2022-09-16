import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }
  isLoggedIn: boolean = false
  redirectUrl!: string;

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = USERS.some((e) => e.name == name && e.password == password)

    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn) => this.isLoggedIn = isLoggedIn)
    )

  }

  logout() {
    this.isLoggedIn = false
  }
}
