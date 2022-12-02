// node modules
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

// local files
import { PageStoryblok } from '../component-types-sb';

const Page: React.FC<{ blok: PageStoryblok }> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
