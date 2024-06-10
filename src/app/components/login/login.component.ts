import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LiginService } from '../../services/ligin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private liginService: LiginService, private router: Router) {}

  onSubmit(): void {
    if (this.liginService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
