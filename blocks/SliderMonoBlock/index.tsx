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
import { IVideo } from '../../types/storyblok';

function SliderMonoBlock({ blok }: any) {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  const video: IVideo = blok.video[0];

  return (
    <div className="relative" {...storyblokEditable(blok)}>
      <Slider hidePagination insideNavigation>
        <>
          <Video
            sourceDesk={video.videoDesk.filename}
            sourceMobile={video.videoMobile.filename}
          />
          <div
            className={cx(
              'absolute bottom-0 left-0 flex w-full flex-col justify-center px-c-72 py-16 md:py-24',
              {
                'items-center': isMobileScreenSize,
              }
            )}
          >
            <Title className="pb-5 pl-3 md:pb-11">{video.title}</Title>
            <Button
              _id="TODO:delete"
              title={video.buttonTitle}
              link={video.buttonLink}
            />
          </div>
        </>

        {blok.images.map((_: any, idx: any) => (
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
}

export default SliderMonoBlock;
