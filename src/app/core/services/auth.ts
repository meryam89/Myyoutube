import { Injectable, signal, effect } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<User | null>(null);

  constructor() {
    const stored = localStorage.getItem('currentUser');

    if (stored) {
      this.currentUser.set(JSON.parse(stored));
    }

    effect(() => {
      console.log('Utilisateur connecté :', this.currentUser());
    });
  }
  register(user: User): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const exists = users.some((u) => u.pseudo === user.pseudo);

    if (exists) {
      return false;
    }

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    return true;
  }

  login(pseudo: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((u) => u.pseudo === pseudo && u.password === password);

    if (user) {
      this.currentUser.set(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }
}
