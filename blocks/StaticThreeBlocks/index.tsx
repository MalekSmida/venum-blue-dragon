// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { storyblokEditable } from '@storyblok/react';

// local files
import { CardImageTitle } from '../../components';
import { Section, Slider } from '../../layout';
import { selectApp } from '../../redux/slices/appSlice';
import { StaticThreeBlocksStoryblok } from '../../component-types-sb';

const StaticThreeBlocks: React.FC<{
  blok: StaticThreeBlocksStoryblok;
}> = ({ blok }) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <div className={cx('w-full', { 'flex flex-row': !isMobileScreenSize })}>
        {isMobileScreenSize ? (
          <Slider
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 3,
              },
            }}
          >
            {blok.blockList.map((card) => (
              <CardImageTitle
                key={card._uid}
                blok={card}
                width="w-full"
                height="h-c-750"
                withPagination
              />
            ))}
          </Slider>
        ) : (
          blok.blockList.map((card) => (
            <CardImageTitle
              key={card._uid}
              blok={card}
              width="w-full sm:w-1/3"
              height="h-c-750"
            />
          ))
        )}
      </div>
    </Section>
  );
};

export default StaticThreeBlocks;
