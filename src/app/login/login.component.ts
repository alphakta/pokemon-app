import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecté'
  name!: string
  password!: string
  auth!: AuthService

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth = this.authService
  }

  setMessage() {
    if (this.authService.isLoggedIn)
      this.message = 'Vous êtes connecté'
    else
      this.message = 'Identifiant ou mot de passe incorrect.'
  }

  login() {
    this.message = 'Tentative de connexion en cours...'
    this.authService.login(this.name, this.password)
      .subscribe((isLoggedIn) => {
        this.setMessage()
        if (isLoggedIn)
          this.router.navigate(['/pokemons'])
        else{
          this.router.navigate(['/login'])
          this.password = ''
        }
      }
      )
  }
  logout() { 
    this.authService.logout()
    this.message = 'Vous êtes déconnecté'
  }
}
