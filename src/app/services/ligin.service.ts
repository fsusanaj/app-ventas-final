import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LiginService {
  private isLoggedIn = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Aquí puedes agregar tu lógica de autenticación
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
