// node modules
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import { useSelector } from 'react-redux';

// local files
import {
  Collections,
  Gender,
  Media,
  Categories,
  Products,
  Custom,
} from '../blocks';
import { selectApp } from '../redux/slices/appSlice';

const Page = ({ blok }: any) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <Media />
      {isMobileScreenSize && <Categories />}
      <Collections />
      <Gender />
      {!isMobileScreenSize && <Categories />}
      <Products />
      <Custom />
    </main>
  );
};

export default Page;
