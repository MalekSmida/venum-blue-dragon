// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { storyblokEditable } from '@storyblok/react';

// local files
import { selectApp } from '../../redux/slices/appSlice';
import { Video, Button, Title, CardImageMedia } from '../../components';
import { Slider } from '../../layout';
import { dataMedia } from './mocks';

// typings
import { SliderMonoBlockStoryblok } from '../../component-types-sb';

const SliderMonoBlock: React.FC<{ blok: SliderMonoBlockStoryblok }> = ({
  blok,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <div className="relative" {...storyblokEditable(blok)}>
      <Slider hidePagination insideNavigation>
        <>
          <Video
            sourceDesk={blok.video[0].videoDesk.filename}
            sourceMobile={blok.video[0].videoMobile.filename}
          />
          <div
            className={cx(
              'absolute bottom-0 left-0 flex w-full flex-col justify-center px-c-72 py-16 md:py-24',
              {
                'items-center': isMobileScreenSize,
              }
            )}
          >
            <Title className="pb-5 pl-3 md:pb-11">{blok.video[0].title}</Title>
            <Button
              _id="TODO:delete"
              title={blok.video[0].buttonTitle}
              link={blok.video[0].buttonLink.url}
            />
          </div>
        </>

        {blok.images?.map((_, idx) => (
          <CardImageMedia
            key={idx}
            collection={dataMedia}
            width="w-full"
            height="h-screen"
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderMonoBlock;
