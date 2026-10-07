import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell')
        .then(m => m.Shell),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/search/search-page/search-page')
            .then(m => m.SearchPage)
      }
    ]
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register')
        .then(m => m.Register)
  },

  {
    path: 'playlist',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/playlists/playlist-page/playlist-page')
        .then(m => m.PlaylistPage)
  },

  {
    path: 'player/:id',
    loadComponent: () =>
      import('./features/player/player-page/player-page')
        .then(m => m.PlayerPage)
  }
];
