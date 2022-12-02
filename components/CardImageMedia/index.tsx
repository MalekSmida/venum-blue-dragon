// node modules
import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// local files
import Button from '../Button';
import Title from '../Title';
import { selectApp } from '../../redux/slices/appSlice';
import { CardImageMediaStoryblok } from '../../component-types-sb';

interface PropsCardImageMedia {
  blok: CardImageMediaStoryblok;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
}

const CardImageMedia: React.FC<PropsCardImageMedia> = ({
  blok,
  width,
  height,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <div className={cx('relative mx-0.5', width, height)}>
      <div className="relative h-full w-full">
        <Image
          src={
            isMobileScreenSize
              ? blok.imageMobile.filename
              : blok.imageDesk.filename
          }
          alt={blok.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div
        className={cx(
          'absolute bottom-0 left-0 flex w-full flex-col justify-center px-c-72 py-16 md:py-24',
          {
            'items-center': isMobileScreenSize,
          }
        )}
      >
        <Title className="pb-5 pl-3 md:pb-11">{blok.buttonTitle}</Title>
        <Button title="Découvrir" link={blok.buttonlink} />
      </div>
    </div>
  );
};

export default CardImageMedia;
