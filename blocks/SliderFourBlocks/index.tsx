// node modules
import { storyblokEditable } from '@storyblok/react';

// local files
import { CardImageTitle } from '../../components';
import { Section, Slider } from '../../layout';

// typings
import { SliderFourBlocksStoryblok } from '../../component-types-sb';

const SliderFourBlocks: React.FC<{ blok: SliderFourBlocksStoryblok }> = ({
  blok,
}) => {
  return (
    <Section title="Découvrir nos collections" {...storyblokEditable(blok)}>
      <Slider
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
        }}
      >
        {blok.cardList.map((card) => (
          <CardImageTitle
            key={card._uid}
            blok={card}
            width="w-full"
            height="h-c-665"
            withPagination
          />
        ))}
      </Slider>
    </Section>
  );
};

export default SliderFourBlocks;
