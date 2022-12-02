import { StoryblokStory } from 'storyblok-generate-ts';

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'story';
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'asset' | 'url';
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      [k: string]: any;
    };

export interface CardImageMediaStoryblok {
  ImageDesk: AssetStoryblok;
  ImageMobile: AssetStoryblok;
  Title?: string;
  ButtonTitle: string;
  ButtonLink: MultilinkStoryblok;
  _uid: string;
  component: 'CardImageMedia';
  [k: string]: any;
}

export interface PageStoryblok {
  body?: SliderMonoBlockStoryblok[];
  _uid: string;
  component: 'Page';
  [k: string]: any;
}

export interface SliderMonoBlockStoryblok {
  video: VideoStoryblok[];
  images?: CardImageMediaStoryblok[];
  _uid: string;
  component: 'SliderMonoBlock';
  [k: string]: any;
}

export interface VideoStoryblok {
  videoDesk: AssetStoryblok;
  videoMobile: AssetStoryblok;
  title: string;
  buttonTitle: string;
  buttonLink: MultilinkStoryblok;
  _uid: string;
  component: 'Video';
  [k: string]: any;
}
