// node modules
import { storyblokInit, apiPlugin, getStoryblokApi } from '@storyblok/react';

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN || '4o7gexN6wUikLWMuiYSXLAtt', // FIXME: key is not detected from env
  // bridge: false,
  apiOptions: {},
  use: [apiPlugin], // fetching data method
  components: {},
});

// storyblok service instance
export const storyblokApi = getStoryblokApi();
