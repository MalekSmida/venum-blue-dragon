// node modules
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { storyblokInit, apiPlugin } from '@storyblok/react';

// local files
import '../styles/globals.css';
import { store } from '../redux/store';

// blocks
import Page from './Page';
import { SliderMonoBlock } from '../blocks';

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN || '4o7gexN6wUikLWMuiYSXLAtt', // FIXME: key is not detected from env
  // bridge: false,
  apiOptions: {},
  use: [apiPlugin], // fetching data method
  components: {
    Page,
    SliderMonoBlock,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
