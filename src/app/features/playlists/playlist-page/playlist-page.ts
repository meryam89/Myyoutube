import { Component, inject } from '@angular/core';
import { PlaylistService } from '../../../core/services/playlist';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist-page.html',
  styleUrl: './playlist-page.scss',
})
export class PlaylistPage {
  playlist = inject(PlaylistService);
}

