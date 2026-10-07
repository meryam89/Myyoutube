import { Component, inject, signal } from '@angular/core';
import { PlaylistService } from '../../../core/services/playlist';
import { VideoService } from '../../../core/services/video';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPage {
  private videoService = inject(VideoService);
  private playlist = inject(PlaylistService);

  query = signal('');
  videos = signal<any[]>([]);
  loading = signal(false);
  error = signal('');
  searched = signal(false);

  async search() {

    console.log('BOUTON CLIQUÉ');

    if (!this.query()) {
      return;
    }

    this.searched.set(true);

    this.loading.set(true);
    this.error.set('');

    try {

      const result = await this.videoService.search(this.query());

      console.log('RESULTAT API :', result);

      this.videos.set(result ?? []);

    } catch (error) {

      console.error('ERREUR API :', error);

      this.error.set('Erreur lors de la recherche');

    } finally {

      this.loading.set(false);

    }
  }

  addToPlaylist(video: any) {
        this.playlist.add({
        id: video.videoId,
        title: video.title,
        thumbnail: video.videoThumbnails?.[0]?.url ?? ''
      } as any);

  }
}
