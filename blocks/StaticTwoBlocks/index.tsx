// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { storyblokEditable } from '@storyblok/react';

// local files
import { CardImageButtons } from '../../components';
import { Section, Slider } from '../../layout';
import { selectApp } from '../../redux/slices/appSlice';
import { StaticTwoBlocksStoryblok } from '../../component-types-sb';

const StaticTwoBlocks: React.FC<{ blok: StaticTwoBlocksStoryblok }> = ({
  blok,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Section {...storyblokEditable(blok)}>
      <div className={cx('w-full', { 'flex flex-row': !isMobileScreenSize })}>
        {isMobileScreenSize ? (
          <Slider>
            {blok.blockList.map((card) => (
              <CardImageButtons
                key={card._uid}
                blok={card}
                width="w-full"
                height="h-c-800"
                isContentCenter
                withPagination
              />
            ))}
          </Slider>
        ) : (
          blok.blockList.map((card) => (
            <CardImageButtons
              key={card._uid}
              blok={card}
              width="w-full lg:w-1/2"
              height="h-c-800"
              isContentCenter
            />
          ))
        )}
      </div>
    </Section>
  );
};

export default StaticTwoBlocks;
