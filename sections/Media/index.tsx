// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';

// local files
import { selectApp } from '../../redux/slices/appSlice';
import { Video, Button, Title, CardPictureMedia } from '../../components';
import { Slider } from '../../layout';
import { dataMedia } from './mocks';

function Media() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <div className="relative">
      <Slider hidePagination insideNavigation>
        <>
          <Video
            sourceDesk="https://a.storyblok.com/f/117261/x/a0ff98bb58/giants-3-0-v12.mp4"
            sourceMobile="https://a.storyblok.com/f/117261/x/a0ff98bb58/giants-3-0-v12.mp4"
          />
          <div
            className={cx(
              'absolute bottom-0 left-0 flex w-full flex-col justify-center px-c-72 py-16 md:py-24',
              {
                'items-center': isMobileScreenSize,
              }
            )}
          >
            <Title className="pb-5 pl-3 md:pb-11">Les gants GIANT 3.0</Title>
            <Button _id="" title="Découvrir" link="/home" />
          </div>
        </>
        {Array.from({ length: 1 }, (_, idx) => idx).map((item) => (
          <CardPictureMedia
            key={item}
            collection={dataMedia}
            width="w-full"
            height="h-screen"
          />
        ))}
      </Slider>
    </div>
  );
}

export default Media;
