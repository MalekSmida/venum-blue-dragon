// node module
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

/**
 * Media block component
 */
function Page({ blok }: any) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {/* <SliderMonoBlock />
        {isMobileScreenSize && <Categories />}
        <Collections />
        <Gender />
        {!isMobileScreenSize && <Categories />}
        <Products />
        <Custom /> */}
    </main>
  );
}

export default Page;
