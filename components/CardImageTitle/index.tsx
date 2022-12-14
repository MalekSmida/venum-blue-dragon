// node modules
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// local files
import { ICollection } from '../../types';
import Title from '../Title';
import { selectApp } from '../../redux/slices/appSlice';

export interface PropsCardImageTitle {
  collection: ICollection;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
  withPagination?: boolean;
}

const CardImageTitle: React.FC<PropsCardImageTitle> = ({
  collection,
  width,
  height,
  withPagination = false,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    // <Link href={`/collection/${collection.link}`}>
    <div
      className={cx(
        'relative mx-0.5 cursor-pointer overflow-hidden',
        width,
        isMobileScreenSize ? 'h-c-575' : height // default height of cards in mobile screens
      )}
    >
      <div className="relative h-full w-full transition-transform duration-200 ease-in-out hover:scale-105">
        <Image
          src={
            isMobileScreenSize ? collection.imageMobile : collection.imageDesk
          }
          alt={collection.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <Title
        className={cx('absolute bottom-0 left-0 w-full px-5 py-4', {
          'bottom-20 text-center': withPagination && isMobileScreenSize,
        })}
      >
        {collection.title}
      </Title>
    </div>
    // </Link>
  );
};

export default CardImageTitle;
