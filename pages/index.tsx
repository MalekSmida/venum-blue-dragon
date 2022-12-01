// node modules
import Head from 'next/head';
import { useSelector } from 'react-redux';

// local files
import {
  Collections,
  Gender,
  SliderMonoBlock,
  Categories,
  Products,
  Custom,
} from '../blocks';
import useDetectMobileScreenSize from '../hooks/useDetectMobileScreenSize';
import { selectApp } from '../redux/slices/appSlice';
import { storyblokApi } from '../services/storyblok';

export default function Home({ story }: any) {
  console.log(story);
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

      <main>
        <SliderMonoBlock />
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

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
