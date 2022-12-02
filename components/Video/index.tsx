// node module
import { useSelector } from 'react-redux';

// local files
import { selectApp } from '../../redux/slices/appSlice';

// typings
interface PropsVideo {
  sourceDesk: string;
  sourceMobile: string;
}

const Video: React.FC<PropsVideo> = ({ sourceDesk, sourceMobile }) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <video
      loop
      autoPlay
      muted
      src={isMobileScreenSize ? sourceMobile : sourceDesk}
      className="h-screen min-w-full bg-c-dark object-cover"
    ></video>
  );
};

export default Video;
