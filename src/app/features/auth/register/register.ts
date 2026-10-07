import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private auth = inject(AuthService);
  private router = inject(Router);

  pseudo = signal('');
  email = signal('');
  password = signal('');

  error = signal('');

  register() {
    if (!this.pseudo() || !this.email() || !this.password()) {
      this.error.set('Tous les champs sont obligatoires');
      return;
    }

    const user = {
      id: crypto.randomUUID(),
      pseudo: this.pseudo(),
      email: this.email(),
      password: this.password(),
    };

    this.auth.register(user);

    this.router.navigate(['/login']);
  }
}
