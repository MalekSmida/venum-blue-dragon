// node modules
import Head from 'next/head';
import { StoryblokComponent, useStoryblokState } from '@storyblok/react';
import { useSelector } from 'react-redux';

// local files
import useDetectMobileScreenSize from '../hooks/useDetectMobileScreenSize';
import { storyblokApi } from '../services/storyblok';
import {
  Categories,
  Collections,
  Custom,
  Gender,
  Media,
  Products,
} from '../sections';
import { selectApp } from '../redux/slices/appSlice';

export default function Home({ story }: any) {
  // A custom hook that connects the current story/page to the Storyblok Real Time Visual Editor
  // story = useStoryblokState(story);

  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  // hooks
  useDetectMobileScreenSize();

  return (
    <div>
      <Head>
        <title>Venum</title>
        <meta
          name="description"
          content="Gives you comfortable outfit for fighting sports like Boxing, BJJ, Karate & MMA"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <StoryblokComponent blok={story.content} /> */}

      <main>
        <Media />
        {isMobileScreenSize && <Categories />}
        <Collections />
        <Gender />
        {!isMobileScreenSize && <Categories />}
        <Products />
        <Custom />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  const slug = 'home';

  // load the draft version
  const sbParams = {
    version: 'draft', // or 'published'
  };

  // fetch stories from storyblok
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    // revalidate: 3600, // revalidate every hour
    revalidate: 36,
  };
}
