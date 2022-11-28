// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';

// local files
import { selectApp } from '../../redux/slices/appSlice';

// local files
import { Video, Button, Title } from '../../components';

function Media() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <div className="relative">
      <Video
        sourceDesk="https://a.storyblok.com/f/117261/x/a0ff98bb58/giants-3-0-v12.mp4"
        sourceMobile="https://a.storyblok.com/f/117261/x/a0ff98bb58/giants-3-0-v12.mp4"
      />
      <div
        className={cx(
          'absolute bottom-0 left-0 flex w-full flex-col justify-center px-c-72 py-24',
          {
            'items-center': isMobileScreenSize,
          }
        )}
      >
        <Title className="pb-11 pl-3">Les gants GIANT 3.0</Title>
        <Button title="Découvrir" link="/home" />
      </div>
    </div>
  );
}

export default Media;
