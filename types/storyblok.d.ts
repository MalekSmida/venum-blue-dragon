export interface IMediaSource {
  id: string;
  filename: string;
}

export interface IVideo {
  _uid: string;
  videoDesk: IMediaSource;
  videoMobile: IMediaSource;
  title: string;
  buttonTitle: string;
  buttonLink: string;
}
