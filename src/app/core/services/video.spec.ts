import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { VideoService } from './video';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });

    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
