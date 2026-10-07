import { Injectable, inject, signal, computed, effect } from '@angular/core';
import { AuthService } from './auth';
import { Video } from '../../shared/models/video.model';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private auth = inject(AuthService);

  videos = signal<Video[]>([]);

  videoCount = computed(() => this.videos().length);

  constructor() {
    effect(() => {
      const user = this.auth.currentUser();

      if (user) {
        this.loadPlaylist();
      } else {
        this.videos.set([]);
      }
    });
  }

  private getStorageKey(): string {
    const user = this.auth.currentUser();
    return user ? `playlist_${user.id}` : 'playlist_guest';
  }

  loadPlaylist() {
    const stored = localStorage.getItem(this.getStorageKey());

    if (stored) {
      this.videos.set(JSON.parse(stored));
    } else {
      this.videos.set([]);
    }
  }

  private save() {
    localStorage.setItem(this.getStorageKey(), JSON.stringify(this.videos()));
  }

  add(video: Video) {
    const exists = this.videos().some((v) => v.id === video.id);
    if (exists) return;

    this.videos.update((v) => [...v, video]);
    this.save();
  }

  remove(id: string) {
    this.videos.update((v) => v.filter((x) => x.id !== id));
    this.save();
  }

  clear() {
    this.videos.set([]);
    this.save();
  }
}
