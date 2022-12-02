import {StoryblokStory} from 'storyblok-generate-ts'

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
      linktype?: "story";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  title: string;
  link: MultilinkStoryblok;
  _uid: string;
  component: "Button";
  [k: string]: any;
}

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

export interface CardImageButtonsStoryblok {
  imageDesk: AssetStoryblok;
  imageMobile: AssetStoryblok;
  title?: string;
  description?: string;
  buttonList: ButtonStoryblok[];
  _uid: string;
  component: "CardImageButtons";
  [k: string]: any;
}

export interface CardImageMediaStoryblok {
  imageDesk: AssetStoryblok;
  imageMobile: AssetStoryblok;
  title: string;
  buttonTitle: string;
  buttonLink: MultilinkStoryblok;
  _uid: string;
  component: "CardImageMedia";
  [k: string]: any;
}

export interface CardImageTitleStoryblok {
  imageDesk: AssetStoryblok;
  imageMobile: AssetStoryblok;
  title: string;
  link: MultilinkStoryblok;
  _uid: string;
  component: "CardImageTitle";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (SliderFourBlocksStoryblok | SliderMonoBlockStoryblok | StaticTwoBlocksStoryblok)[];
  _uid: string;
  component: "Page";
  [k: string]: any;
}

export interface SliderFourBlocksStoryblok {
  title: string;
  cardList: CardImageTitleStoryblok[];
  _uid: string;
  component: "SliderFourBlocks";
  [k: string]: any;
}

export interface SliderMonoBlockStoryblok {
  video: VideoStoryblok[];
  images?: CardImageMediaStoryblok[];
  _uid: string;
  component: "SliderMonoBlock";
  [k: string]: any;
}

export interface StaticTwoBlocksStoryblok {
  blockList: CardImageButtonsStoryblok[];
  _uid: string;
  component: "StaticTwoBlocks";
  [k: string]: any;
}

export interface VideoStoryblok {
  videoDesk: AssetStoryblok;
  videoMobile: AssetStoryblok;
  title: string;
  buttonTitle: string;
  buttonLink: MultilinkStoryblok;
  _uid: string;
  component: "Video";
  [k: string]: any;
}
