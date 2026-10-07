import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth';
import { PlaylistService } from '../../../core/services/playlist';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private auth = inject(AuthService);
  private router = inject(Router);
  private playlist = inject(PlaylistService);

  pseudo = signal('');
  password = signal('');
  error = signal('');

  login() {

    if (!this.pseudo() || !this.password()) {
      this.error.set('Veuillez remplir tous les champs');
      return;
    }

    const success = this.auth.login(
      this.pseudo(),
      this.password()
    );

    if (success) {

      // Recharge la playlist du nouvel utilisateur
      this.playlist.loadPlaylist();

      // Redirection vers la page principale
      this.router.navigate(['/']);

    } else {
      this.error.set('Pseudo ou mot de passe incorrect');
    }
  }
}
