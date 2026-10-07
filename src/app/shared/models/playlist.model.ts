import { Video } from './video.model';

export interface Playlist {
  userId: string;
  videos: Video[];
}
