// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { storyblokEditable } from '@storyblok/react';

// local files
import { selectApp } from '../../redux/slices/appSlice';
import { Video, Button, Title, CardImageMedia } from '../../components';
import { Slider } from '../../layout';

// typings
import { SliderMonoBlockStoryblok } from '../../component-types-sb';

const SliderMonoBlock: React.FC<{ blok: SliderMonoBlockStoryblok }> = ({
  blok,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  const { videoDesk, videoMobile, title, buttonTitle, buttonLink } =
    blok.video[0];

  console.log(blok.images);

  return (
    <div className="relative" {...storyblokEditable(blok)}>
      <Slider hidePagination insideNavigation>
        <>
          <Video
            sourceDesk={videoDesk.filename}
            sourceMobile={videoMobile.filename}
          />
          <div
            className={cx(
              'absolute bottom-0 left-0 flex w-full flex-col justify-center px-c-72 py-16 md:py-24',
              {
                'items-center': isMobileScreenSize,
              }
            )}
          >
            <Title className="pb-5 pl-3 md:pb-11">{title}</Title>
            <Button title={buttonTitle} link={buttonLink.url} />
          </div>
        </>

        {blok.images?.map((image) => (
          <CardImageMedia
            key={image._uid}
            blok={image}
            width="w-full"
            height="h-screen"
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderMonoBlock;
