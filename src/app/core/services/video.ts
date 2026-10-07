import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
}

interface YouTubeSearchItem {
  id: {
    videoId: string;
  };

  snippet: {
    title: string;
    thumbnails: {
      high?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      default?: {
        url: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private http = inject(HttpClient);

  private readonly apiUrl = 'https://www.googleapis.com/youtube/v3/search';



  async search(query: string) {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('maxResults', '12')
      .set('q', query)
      .set('key', environment.youtubeApiKey);

    const response = await firstValueFrom(
      this.http.get<YouTubeSearchResponse>(this.apiUrl, { params }),
    );

    return response.items.map((item) => ({
      videoId: item.id.videoId,

      title: item.snippet.title,

      videoThumbnails: [
        {
          url:
            item.snippet.thumbnails.high?.url ??
            item.snippet.thumbnails.medium?.url ??
            item.snippet.thumbnails.default?.url ??
            '',
        },
      ],
    }));
  }
}
